import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Avatar } from 'shared/ui/Avatar';
import { AppLink } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { DropDown, DropDownItemType } from 'shared/ui/DropDown';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';
import BellIcon from 'shared/assets/icons/bell.svg';

import {
  getIsUserAdmin, getIsUserManager, getUserAuthData, userActions,
} from 'entities/User';

import { LoginModal } from 'features/AuthByUsername';

import { Popover } from 'shared/ui/Popover';
import styles from './TopBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const TopBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);
  const dispatch = useAppDispatch();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onCloseModal = useCallback(() => setIsAuthOpen(false), [setIsAuthOpen]);

  const onOpenModal = useCallback(() => setIsAuthOpen(true), [setIsAuthOpen]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const onLoginSuccess = useCallback(() => setIsAuthOpen(false), [setIsAuthOpen]);

  const isAdminPanelAvailable = isAdmin || isManager;

  const dropDownItems = useMemo(() => ([
    ...(isAdminPanelAvailable ? ([{
      type: DropDownItemType.Link,
      value: 'admin',
      label: t('navbar.admin-panel'),
      href: RoutePath.admin_panel,
    }]) : []),
    {
      type: DropDownItemType.Link,
      value: 'profile',
      label: t('navbar.profile'),
      href: `${RoutePath.profile}${authData?.id}`,
    },
    {
      type: DropDownItemType.Button,
      value: 'logout',
      label: t('navbar.logout'),
      onClick: onLogout,
    },
  ]), [onLogout, authData?.id, t, isAdminPanelAvailable]);

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

        <Popover trigger={<Button theme="clear"><BellIcon className={styles.bellIcon} /></Button>}>
          {t('navbar.notifications')}
        </Popover>

        <DropDown
          trigger={(
            <Button>
              <Avatar size={30} src={authData.avatar} />
            </Button>
          )}
          items={dropDownItems}
        />
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
