import { FC, Suspense } from 'react';
import classNames from 'classnames';

import { Modal, ModalProps } from 'shared/ui/Modal';
import { PropsWithClassName } from 'shared/types';

import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import styles from './LoginModal.module.scss';

type LoginModalProps = PropsWithClassName &
Pick<ModalProps, 'isOpen' | 'onClose'> &
Pick<LoginFormProps, 'onSuccess'>;

export const LoginModal: FC<LoginModalProps> = ({
  className, onSuccess,
  ...restProps
}) => (
  <Modal className={classNames(className, styles.LoginModal)} {...restProps} lazy>
    <Suspense fallback="Loading...">
      <LoginFormAsync onSuccess={onSuccess} />
    </Suspense>
  </Modal>
);
