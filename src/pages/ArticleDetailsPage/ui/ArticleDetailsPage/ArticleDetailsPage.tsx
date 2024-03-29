import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Id } from '@/shared/types';
import { VStack } from '@/shared/ui/Stack';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useProjectEffect } from '@/shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from '@/shared/hooks/useDynamicReducers';

import { ArticleDetails } from '@/entities/Article';

import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';

import { Page } from '@/widgets/Page';

import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailPageReducer } from '../../model/slices/articleDetailsPageSlice/articleDetailPageSlice';
import { fetchRecommendations } from '../../model/services/fetchRecommendations/fetchRecommendations';

const dynamicReducers: ReducersList = {
  articleDetailsPage: articleDetailPageReducer,
};

export const ArticleDetailsPage = () => {
  useDynamicReducers(dynamicReducers);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const { id } = useParams<{ id: Id }>();

  useProjectEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  if (!id) {
    return <Page>{t('article-details.error.not-found')}</Page>;
  }

  return (
    <Page>
      <VStack gap={16} align="stretch">
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
};
