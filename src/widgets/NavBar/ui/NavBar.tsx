import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { LoginModal } from 'features/AuthByUsernam';

import { Button, ButtonTheme } from 'shared/ui/Button';

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
      <Button
        theme={ButtonTheme.Background}
        type="button"
        onClick={onOpenModal}
      >
        {t('navbar.sign-in')}
      </Button>

      <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
    </div>
  );
};
