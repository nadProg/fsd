import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { VStack } from '@/shared/ui/Stack';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text, TextVariant } from '@/shared/ui/Text';
import type { PropsWithClassName } from '@/shared/types';

import type { Notification } from '../../model/types/notification';

import styles from './NotificationItem.module.scss';

type NotificationItemProps = PropsWithClassName & {
  notification: Notification
};

export const NotificationItem = memo(({ className, notification }: NotificationItemProps) => {
  const { t } = useTranslation();

  return (
    <Card theme={CardTheme.Outlined} className={classNames(className, styles.NotificationItem)}>
      <VStack gap={8}>
        <Text variant={TextVariant.Title}>{notification.title}</Text>
        <Text variant={TextVariant.Text}>{notification.description}</Text>
      </VStack>
    </Card>
  );
});

NotificationItem.displayName = 'Notification';
