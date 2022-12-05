import { memo } from 'react';
import classNames from 'classnames';

import { PropsWithClassName } from 'shared/types';
import { Popover } from 'shared/ui/Popover';
import { Button } from 'shared/ui/Button';
import BellIcon from 'shared/assets/icons/bell.svg';

import { NotificationList } from 'entities/Notification';

import styles from './NotificationButton.module.scss';

type NotificationButtonProps = PropsWithClassName;

export const NotificationButton = memo(({ className }: NotificationButtonProps) => (
  <Popover
    className={classNames(className, styles.NotificationButton)}
    trigger={<Button theme="clear"><BellIcon className={styles.bellIcon} /></Button>}
  >
    <NotificationList className={styles.notifications} />
  </Popover>
));

NotificationButton.displayName = 'NotificationButton';
