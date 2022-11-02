import { PropsWithClassName } from 'shared/types';
import classNames from 'classnames';

import { Avatar } from 'shared/ui/Avatar';
import { Text, TextVariant } from 'shared/ui/Text';

import { Skeleton } from 'shared/ui/Skeleton';
import { Comment } from '../../model/types/comment';

import styles from './CommentCard.module.scss';

type CommentCardProps = PropsWithClassName & {
  comment?: Comment,
  isLoading?: boolean;
};

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading || !comment) {
    return (
      <div className={classNames(className, styles.CommentCard)}>

        <div className={styles.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.CommentCard)}>

      <div className={styles.header}>
        <Avatar size={30} src={comment.user.avatar} alt="" />
        <Text variant={TextVariant.Title}>{comment.user.username}</Text>
      </div>

      <Text>{comment.text}</Text>
    </div>
  );
};
