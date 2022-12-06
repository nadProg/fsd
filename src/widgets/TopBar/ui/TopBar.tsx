import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { AppLink } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/config/router/routeConfig/routeConfig';

import {
  getUserAuthData,
} from '@/entities/User';

import { AvatarMenu } from '@/features/avatarMenu';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/notificationButton';

import styles from './TopBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const TopBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onCloseModal = useCallback(() => setIsAuthOpen(false), [setIsAuthOpen]);

  const onOpenModal = useCallback(() => setIsAuthOpen(true), [setIsAuthOpen]);

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

        <NotificationButton />

        <AvatarMenu />
      </header>
    );
  }

  return (
    <header className={classNames(styles.TopBar, className)}>
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
