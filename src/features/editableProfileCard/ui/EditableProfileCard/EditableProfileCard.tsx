import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Text, TextTheme } from '@/shared/ui/Text';
import { Id, PropsWithClassName, ValuesOf } from '@/shared/types';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useDynamicReducers } from '@/shared/hooks/useDynamicReducers';
import { useProjectEffect } from '@/shared/hooks/useProjectEffect';

import {
  ProfileCard,
} from '@/entities/Profile';
import { ValuesOfCountry } from '@/entities/Country';
import { ValuesOfCurrency } from '@/entities/Currency';

import {
  EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import {
  getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {
  getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { editableProfileSliceActions, editableProfileSliceReducer } from '../../model/slices/editableProfileCardSlice';

import styles from './EditableProfileCard.module.scss';

const validateErrorTranslates: Record<ValuesOf<typeof ValidateProfileError>, string> = {
  [ValidateProfileError.NoData]: 'profile.errors.no_data',
  [ValidateProfileError.IncorrectUserData]: 'profile.errors.incorrect_user_data',
  [ValidateProfileError.IncorrectAge]: 'profile.errors.incorrect_age',
  [ValidateProfileError.IncorrectCountry]: 'profile.errors.incorrect_country',
  [ValidateProfileError.ServerError]: 'profile.errors.server_error',
};

type EditableProfileCardProps = PropsWithClassName & {
  id: Id;
};

const reducers = {
  editableProfile: editableProfileSliceReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  useDynamicReducers(reducers);

  const dispatch = useAppDispatch();

  useProjectEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const profileData = useSelector(getProfileData);
  const profileForm = useSelector(getProfileForm);
  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);
  const profileReadonly = useSelector(getProfileReadonly);
  const profileValidateErrors = useSelector(getProfileValidateErrors);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(editableProfileSliceActions.updateForm({ firstname: value }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(editableProfileSliceActions.updateForm({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(editableProfileSliceActions.updateForm({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(editableProfileSliceActions.updateForm({ city: value }));
  }, [dispatch]);

  const onChangeUserName = useCallback((value?: string) => {
    dispatch(editableProfileSliceActions.updateForm({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(editableProfileSliceActions.updateForm({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: ValuesOfCurrency) => {
    dispatch(editableProfileSliceActions.updateForm({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: ValuesOfCountry) => {
    dispatch(editableProfileSliceActions.updateForm({ country: value }));
  }, [dispatch]);

  return (
    <div className={classNames(className, styles.EditableProfileCard)}>
      <EditableProfileCardHeader />

      {profileValidateErrors?.map((error) => (
        <Text key={error} theme={TextTheme.Error} data-testid="EditableProfileCard.Error">
          { t(validateErrorTranslates[error]) }
        </Text>
      ))}

      <ProfileCard
        className={styles.profileCard}
        data={profileData}
        form={profileForm}
        error={profileError}
        isLoading={profileIsLoading}
        readonly={profileReadonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUserName={onChangeUserName}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
});

EditableProfileCard.displayName = 'EditableProfileCard';
