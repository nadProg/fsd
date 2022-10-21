import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import { useDynamicReducers } from 'shared/hooks/useDynamicReducers';

const reducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const { t } = useTranslation();

  useDynamicReducers(reducers);

  return (
    <div>
      <h1>{t('profile.title')}</h1>
      <p>{t('profile.content')}</p>
    </div>
  );
};
