import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';

import { useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useDynamicReducers(reducers);

  const profileData = useSelector(getProfileData);
  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <h1>{t('profile.title')}</h1>
      <p>{t('profile.content')}</p>
      <ProfileCard
        data={profileData}
        error={profileError}
        isLoading={profileIsLoading}
      />
    </div>
  );
};
