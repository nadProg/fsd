import { useTranslation } from 'react-i18next';

export const ArticleDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('article-details.title')}</h1>
      <p>{t('article-details.content')}</p>
    </div>
  );
};
