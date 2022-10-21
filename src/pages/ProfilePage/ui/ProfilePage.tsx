import { useTranslation } from 'react-i18next';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';

const reducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useDynamicReducers(reducers);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <h1>{t('profile.title')}</h1>
      <p>{t('profile.content')}</p>
      <ProfileCard />
    </div>
  );
};
