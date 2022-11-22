import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Id } from 'shared/types';
import { Page } from 'shared/ui/Page';
import { VStack } from 'shared/ui/Stack';
import { Text, TextVariant } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { CommentList } from 'entities/Comment';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';

import { AddCommentForm } from 'features/addCommentForm';

import {
  ArticleDetailsPageHeader,
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
  articleDetailPageReducer,
} from '../../model/slices/articleDetailsPageSlice/articleDetailPageSlice';
import { fetchRecommendations } from '../../model/services/fetchRecommendations/fetchRecommendations';
import {
  getArticleDetailsRecommendationsIsLoading,
} from '../../model/selectors/getArticleDetailsRecommendationsIsLoading/getArticleDetailsRecommendationsIsLoading';
import {
  getArticleRecommendations,
} from '../../model/slices/artcileDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';
import {
  fetchArticleDetailsComments,
} from '../../model/services/fetchArticleDetailsComments/fetchArticleDetailsComments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
  getArticleComments,
} from '../../model/slices/artilceDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';

import styles from './ArticleDetailsPage.module.scss';

const dynamicReducers: ReducersList = {
  articleDetailsPage: articleDetailPageReducer,
};

export const ArticleDetailsPage = () => {
  useDynamicReducers(dynamicReducers);

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);

  const { t } = useTranslation();

  const { id } = useParams<{ id: Id }>();

  useProjectEffect(() => {
    dispatch(fetchArticleDetailsComments(id));
    dispatch(fetchRecommendations());
  }, [dispatch, id]);

  const sendComment = useCallback(async (text: string) => {
    await dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id) {
    return (
      <Page>
        {t('article-details.error.not-found')}
      </Page>
    );
  }

  return (
    <Page>
      <VStack gap={16} align="stretch">
        <ArticleDetailsPageHeader />

        <ArticleDetails id={id} />

        <Text variant={TextVariant.Title} className={styles.sectionTitle}>
          {t('article-details.recommendations')}
        </Text>
        <ArticleList
          className={styles.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          view={ArticleView.Grid}
          linksTarget="_blank"
        />

        <Text variant={TextVariant.Title} className={styles.sectionTitle}>
          {t('article-details.comments')}
        </Text>

        <AddCommentForm
          onSendComment={sendComment}
        />

        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </VStack>
    </Page>
  );
};
