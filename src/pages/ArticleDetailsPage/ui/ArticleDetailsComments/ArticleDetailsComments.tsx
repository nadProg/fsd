import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Text, TextVariant } from '@/shared/ui/Text';

import { VStack } from '@/shared/ui/Stack';
import { Id, PropsWithClassName } from '@/shared/types';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useProjectEffect } from '@/shared/hooks/useProjectEffect';

import { CommentList } from '@/entities/Comment';

import { AddCommentForm } from '@/features/addCommentForm';

import { fetchArticleDetailsComments } from '../../model/services/fetchArticleDetailsComments/fetchArticleDetailsComments';
import { getArticleComments } from '../../model/slices/artilceDetailsCommentsSlice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

type ArticleDetailsCommentsProps = PropsWithClassName & {
  id: Id;
};

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const sendComment = useCallback(
    async (text: string) => {
      await dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useProjectEffect(() => {
    dispatch(fetchArticleDetailsComments(id));
  }, [dispatch, id]);

  return (
    <VStack gap={16} className={className}>
      <Text variant={TextVariant.Title}>{t('article-details.comments')}</Text>

      <AddCommentForm onSendComment={sendComment} className="fullwidth" />

      <CommentList isLoading={commentsIsLoading} comments={comments} className="fullwidth" />
    </VStack>
  );
});

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
