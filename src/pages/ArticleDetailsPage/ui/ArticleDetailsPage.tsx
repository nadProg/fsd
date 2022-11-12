import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Id } from 'shared/types';
import { Text, TextVariant } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { CommentList } from 'entities/Comment';
import { ArticleDetails } from 'entities/Article';

import { AddCommentForm } from 'features/addCommentForm';

import { useCallback } from 'react';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Page } from 'shared/ui/Page';
import {
  fetchArticleDetailsComments,
} from '../model/services/fetchArticleDetailsComments/fetchArticleDetailsComments';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import {
  articleDetailsCommentsReducer, getArticleComments,
} from '../model/slices/artilceDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
  getArticleDetailsCommentsIsLoading,
} from '../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';

import styles from './ArticleDetailsPage.module.scss';

const dynamicReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = () => {
  useDynamicReducers(dynamicReducers);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const { t } = useTranslation();

  const { id } = useParams<{ id: Id }>();

  useProjectEffect(() => {
    dispatch(fetchArticleDetailsComments(id));
  }, [dispatch, id]);

  const sendComment = useCallback(async (text: string) => {
    await dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page>
        {t('article-details.error.not-found')}
      </Page>
    );
  }

  return (
    <Page>
      <Button
        theme={ButtonTheme.Outlined}
        className={styles.backButton}
        onClick={onBackToList}
      >
        {t('article-details.back')}
      </Button>

      <ArticleDetails id={id} />

      <Text variant={TextVariant.Title} className={styles.commentsTitle}>
        {t('article-details.comments')}
      </Text>

      <AddCommentForm
        className={styles.commentForm}
        onSendComment={sendComment}
      />

      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </Page>
  );
};
