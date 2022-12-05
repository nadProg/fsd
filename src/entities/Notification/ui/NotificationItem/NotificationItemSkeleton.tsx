import { memo } from 'react';
import classNames from 'classnames';

import { Card, CardTheme } from 'shared/ui/Card';

import type { PropsWithClassName } from 'shared/types';

import { Skeleton } from 'shared/ui/Skeleton';

import styles from './NotificationItem.module.scss';

type NotificationItemProps = PropsWithClassName;

export const NotificationItemSkeleton = memo(({ className }: NotificationItemProps) => (
  <Card theme={CardTheme.Outlined} className={classNames(className, styles.NotificationItem)} max>
    <Skeleton borderRadius="8px" height="80px" />
  </Card>
));

NotificationItemSkeleton.displayName = 'NotificationItemSkeleton';
