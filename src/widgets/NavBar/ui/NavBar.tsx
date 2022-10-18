import { useCallback, useState } from 'react';
import classNames from 'classnames';

import { LoginModal } from 'features/AuthByUsernam';

import { useTranslation } from 'react-i18next';
import styles from './NavBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onCloseModal = useCallback(() => setIsAuthOpen(false), [setIsAuthOpen]);

  const onOpenModal = useCallback(() => setIsAuthOpen(true), [setIsAuthOpen]);

  return (
    <div className={classNames(styles.Navbar, className)}>
      <button type="button" onClick={onOpenModal}>{t('navbar.sign-in')}</button>

      <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
    </div>
  );
};
