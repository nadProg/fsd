import { useTranslation } from 'react-i18next';

export const ArticlesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('articles.title')}</h1>
      <p>{t('articles.content')}</p>
    </div>
  );
};
