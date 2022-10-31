import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Id } from 'shared/types';
import { useTranslation } from 'react-i18next';

export const ArticleDetailsPage = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: Id }>();

  if (!id) {
    return (
      <div>
        {t('article-details.error.not-found')}
      </div>
    );
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};
