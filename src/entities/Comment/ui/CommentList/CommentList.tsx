import { PropsWithClassName } from 'shared/types';
import classNames from 'classnames';

import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text';

import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

import styles from './CommentList.module.scss';

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
      <div className={classNames(className, styles.CommentList)}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(className, styles.CommentList)}>
        <Text theme={TextTheme.Error}>{error}</Text>
      </div>
    );
  }

  if (!comments?.length) {
    return (
      <div className={classNames(className, styles.CommentList)}>
        {t('comments.list.empty-state')}
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.CommentList)}>
      {
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
      }
    </div>
  );
};
