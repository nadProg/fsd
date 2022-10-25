import {
  FC, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  fetchProfileData,
  getProfileData,
  getProfileError, getProfileForm,
  getProfileIsLoading, getProfileReadonly, profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';

import { PropsWithClassName } from 'shared/types';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers = {
  profile: profileReducer,
};

type ProfilePageProps = PropsWithClassName;

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

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={className}>
      <ProfilePageHeader />
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
      />
    </div>
  );
};
