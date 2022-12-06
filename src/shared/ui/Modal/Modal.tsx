import {
  ReactNode, useEffect, useCallback, useState,
} from 'react';
import classNames from 'classnames';

import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay';

import styles from './Modal.module.scss';

export type ModalProps = {
  className?: string,
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
};

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(className, styles.Modal, { [styles.opened]: isOpen })}>
        <Overlay onClick={onClose} />

        <div className={styles.content}>
          {children}
        </div>

      </div>
    </Portal>
  );
};
