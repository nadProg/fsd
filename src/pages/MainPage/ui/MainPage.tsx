import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('main.title')}</h1>
      <p>{t('main.content')}</p>
    </div>
  );
};
