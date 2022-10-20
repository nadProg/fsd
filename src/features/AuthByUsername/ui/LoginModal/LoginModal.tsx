import { FC, Suspense } from 'react';
import classNames from 'classnames';

import { Modal, ModalProps } from 'shared/ui/Modal';
import { PropsWithClassName } from 'shared/types';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import styles from './LoginModal.module.scss';

type LoginModalProps = PropsWithClassName & Pick<ModalProps, 'isOpen' | 'onClose'>;

export const LoginModal: FC<LoginModalProps> = ({ className, ...restProps }) => (
  <Modal className={classNames(className, styles.LoginModal)} {...restProps} lazy>
    <Suspense fallback="Loading...">
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
