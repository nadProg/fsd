import { FC, Suspense } from 'react';
import classNames from 'classnames';

import { Modal, ModalProps } from 'shared/ui/Modal';
import { PropsWithClassName } from 'shared/types';

import { Loader } from 'shared/ui/Loader';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { LoginFormProps } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

type LoginModalProps = PropsWithClassName &
Pick<ModalProps, 'isOpen' | 'onClose'> &
Pick<LoginFormProps, 'onSuccess'>;

export const LoginModal: FC<LoginModalProps> = ({
  className,
  onSuccess,
  ...restProps
}) => (
  <Modal className={classNames(className, styles.LoginModal)} {...restProps} lazy>
    <Suspense fallback={(
      <div className={styles.loaderWrapper}>
        <Loader />
      </div>
    )}
    >
      <LoginFormAsync onSuccess={onSuccess} />
    </Suspense>
  </Modal>
);
