import {
  FC, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  fetchProfileData,
  getProfileData,
  getProfileError, getProfileForm,
  getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';

import { PropsWithClassName, ValuesOf } from 'shared/types';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { ValuesOfCurrency } from 'entities/Currency';
import { ValuesOfCountry } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers = {
  profile: profileReducer,
};

type ProfilePageProps = PropsWithClassName;

const validateErrorTranslates: Record<ValuesOf<typeof ValidateProfileError>, string> = {
  [ValidateProfileError.NoData]: 'profile.errors.no_data',
  [ValidateProfileError.IncorrectUserData]: 'profile.errors.incorrect_user_data',
  [ValidateProfileError.IncorrectAge]: 'profile.errors.incorrect_age',
  [ValidateProfileError.IncorrectCountry]: 'profile.errors.incorrect_country',
  [ValidateProfileError.ServerError]: 'profile.errors.server_error',
};

export const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useDynamicReducers(reducers);

  const profileData = useSelector(getProfileData);
  const profileForm = useSelector(getProfileForm);
  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);
  const profileReadonly = useSelector(getProfileReadonly);
  const profileValidateErrors = useSelector(getProfileValidateErrors);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateForm({ firstname: value }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateForm({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateForm({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateForm({ city: value }));
  }, [dispatch]);

  const onChangeUserName = useCallback((value?: string) => {
    dispatch(profileActions.updateForm({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateForm({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: ValuesOfCurrency) => {
    dispatch(profileActions.updateForm({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: ValuesOfCountry) => {
    dispatch(profileActions.updateForm({ country: value }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={className}>
      <ProfilePageHeader />

      {profileValidateErrors?.map((error) => (
        <Text key={error} theme={TextTheme.Error}>
          { t(validateErrorTranslates[error]) }
        </Text>
      ))}

      <ProfileCard
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
};
