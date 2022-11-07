import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Id } from 'shared/types';
import { Text, TextVariant } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { CommentList } from 'entities/Comment';
import { ArticleDetails } from 'entities/Article';

import { AddCommentForm } from 'features/addCommentForm';

import { useCallback } from 'react';
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
    </div>
  );
};
