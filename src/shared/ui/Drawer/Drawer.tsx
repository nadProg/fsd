import classNames from 'classnames';

import type { PropsWithChildren, PropsWithClassName } from 'shared/types';
import { Portal } from 'shared/ui/Portal';
import { Overlay } from 'shared/ui/Overlay';

import styles from './Drawer.module.scss';

type DrawerProps = PropsWithClassName & PropsWithChildren & {
  isOpen?: boolean;
  onClose?: () => void;
};

export const Drawer = ({
  className,
  children,
  isOpen,
  onClose,
}: DrawerProps): JSX.Element => (
  <Portal>
    <div className={classNames(className, styles.Drawer, {
      [styles.opened]: isOpen,
    })}
    >
      <Overlay onClick={onClose} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </Portal>
);
