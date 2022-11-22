import { PropsWithClassName } from 'shared/types';
import { useTranslation } from 'react-i18next';

import { VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text';

import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

type CommentListProps = PropsWithClassName & {
  comments?: Comment[];
  isLoading: boolean;
  error?: string;
};

export const CommentList = (props: CommentListProps) => {
  const {
    className, comments, isLoading, error,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap={12} align="stretch" className={className}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  if (error) {
    return (
      <div className={className}>
        <Text theme={TextTheme.Error}>{error}</Text>
      </div>
    );
  }

  if (!comments?.length) {
    return (
      <div className={className}>
        {t('comments.list.empty-state')}
      </div>
    );
  }

  return (
    <VStack gap={12} align="stretch" className={className}>
      {
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
      }
    </VStack>
  );
};
