import classNames from 'classnames';
import type { PropsWithClassName } from '@/shared/types';

import { VStack } from '@/shared/ui/Stack';

import { NotificationItemSkeleton } from '../NotificationItem/NotificationItemSkeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';

import styles from './NotificationList.module.scss';

type NotificationListProps = PropsWithClassName;
export const NotificationList = ({ className }: NotificationListProps) => {
  const {
    data: notifications,
    isLoading,
  } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack gap={16} className={classNames(className, styles.NotificationList)}>
        <NotificationItemSkeleton />
        <NotificationItemSkeleton />
        <NotificationItemSkeleton />
      </VStack>
    );
  }

  return (
    <VStack gap={16} className={classNames(className, styles.NotificationList)}>
      {notifications?.map((notification) => <NotificationItem key={notification.id} notification={notification} />)}
    </VStack>
  );
};
