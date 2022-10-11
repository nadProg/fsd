import { ReactNode, useEffect, useCallback } from 'react';

import { Portal } from 'shared/ui/Portal';
import { classNames } from 'shared/lib/classNames';

import styles from './Modal.module.scss';

type ModalProps = {
  className?: string,
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
}: ModalProps) => {
  const onWindowKeydown = useCallback((evt: KeyboardEvent) => {
    if (onClose && evt.code === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onWindowKeydown);
    }

    return () => window.removeEventListener('keydown', onWindowKeydown);
  }, [isOpen, onWindowKeydown]);

  return (
    <Portal>
      <div className={classNames(styles.Modal, {
        [styles.opened]: isOpen,
      }, [className])}
      >
        <div className={styles.overlay} onClick={onClose} />

        <div className={styles.content}>
          {children}
        </div>

      </div>
    </Portal>
  );
};
