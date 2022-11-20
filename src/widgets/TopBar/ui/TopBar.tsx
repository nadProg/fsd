import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { AppLink } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';

import { getUserAuthData, userActions } from 'entities/User';

import { LoginModal } from 'features/AuthByUsername';

import styles from './TopBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const TopBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onCloseModal = useCallback(() => setIsAuthOpen(false), [setIsAuthOpen]);

  const onOpenModal = useCallback(() => setIsAuthOpen(true), [setIsAuthOpen]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const onLoginSuccess = useCallback(() => setIsAuthOpen(false), [setIsAuthOpen]);

  if (authData) {
    return (
      <header className={classNames(styles.TopBar, className)}>
        <AppLink to={RoutePath.article_create}>
          <Button
            theme={ButtonTheme.Background}
            type="button"
          >
            {t('navbar.new-article')}
          </Button>
        </AppLink>
        <Button
          theme={ButtonTheme.Background}
          type="button"
          onClick={onLogout}
        >
          {t('navbar.logout')}
        </Button>

      </header>
    );
  }

  return (
    <header className={classNames(styles.Navbar, className)}>
      <Button
        theme={ButtonTheme.Background}
        type="button"
        onClick={onOpenModal}
      >
        {t('navbar.sign-in')}
      </Button>

      <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} onSuccess={onLoginSuccess} />
    </header>
  );
};
