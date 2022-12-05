import {
  memo, useMemo, useState,
} from 'react';
import {
  BrowserView, MobileView, isMobile,
} from 'react-device-detect';
import classNames from 'classnames';

import type { PropsWithClassName } from 'shared/types';
import { Button } from 'shared/ui/Button';
import { Drawer } from 'shared/ui/Drawer';
import { Popover } from 'shared/ui/Popover';
import BellIcon from 'shared/assets/icons/bell.svg';

import { NotificationList } from 'entities/Notification';

import styles from './NotificationButton.module.scss';

type NotificationButtonProps = PropsWithClassName;

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onTriggerClick = useMemo(() => (isMobile ? () => setIsDrawerOpen(true) : undefined), [setIsDrawerOpen]);

  const trigger = useMemo(() => (
    <Button theme="clear" onClick={onTriggerClick}>
      <BellIcon className={styles.bellIcon} />
    </Button>
  ), [onTriggerClick]);

  const closeDrawer = useMemo(
    () => (isMobile ? () => setIsDrawerOpen(false) : undefined),
    [setIsDrawerOpen],
  );

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames(className, styles.NotificationButton)}
          trigger={trigger}
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        <div className={classNames(className, styles.NotificationButton)}>
          {trigger}
          <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
            <NotificationList className={styles.notifications} />
          </Drawer>
        </div>
      </MobileView>
    </>
  );
});

NotificationButton.displayName = 'NotificationButton';
