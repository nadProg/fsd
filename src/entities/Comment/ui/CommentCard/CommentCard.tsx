import { PropsWithClassName } from 'shared/types';
import classNames from 'classnames';

import { Avatar } from 'shared/ui/Avatar';
import { Text, TextVariant } from 'shared/ui/Text';

import { Skeleton } from 'shared/ui/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';

import { HStack, VStack } from 'shared/ui/Stack';
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
      <VStack gap={12} className={classNames(className, styles.CommentCard)}>

        <HStack gap={12} className={styles.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={16} />
        </HStack>
        <Skeleton height={50} />
      </VStack>
    );
  }

  return (
    <VStack gap={12} className={classNames(className, styles.CommentCard)}>

      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <HStack gap={12} className={styles.header}>
          <Avatar size={30} src={comment.user.avatar} alt="" />
          <Text variant={TextVariant.Title}>{comment.user.username}</Text>
        </HStack>
      </AppLink>

      <Text>{comment.text}</Text>
    </VStack>
  );
};
