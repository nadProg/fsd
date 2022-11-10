import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';

export const ArticlesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('articles.title')}</h1>
      <p>{t('articles.content')}</p>

      <ArticleList
        view="list"
        articles={[]}
        isLoading={false}
      />
    </div>
  );
};
