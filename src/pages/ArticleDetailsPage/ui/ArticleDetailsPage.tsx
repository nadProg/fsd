import { useParams } from 'react-router-dom';
import { Id } from 'shared/types';
import { useTranslation } from 'react-i18next';

import { ArticleDetails, articleDetailsReducer } from 'entities/Article';

import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

const dynamicReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetailsPage = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: Id }>();

  useDynamicReducers(dynamicReducers);

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
