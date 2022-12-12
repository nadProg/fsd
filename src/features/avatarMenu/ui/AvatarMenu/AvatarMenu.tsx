import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';

import { PropsWithClassName } from '@/shared/types';

import { Button } from '@/shared/ui/Button';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown, DropDownItemType } from '@/shared/ui/DropDown';
import { AppRoute } from '@/shared/constants/router';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

import {
  getIsUserAdmin, getIsUserManager, getUserAuthData, userActions,
} from '@/entities/User';

type AvatarMenuProps = PropsWithClassName;

export const AvatarMenu = memo((props: AvatarMenuProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);

  const userId = authData?.id;

  const dispatch = useAppDispatch();

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const dropDownItems = useMemo(() => ([
    ...(isAdminPanelAvailable ? ([{
      type: DropDownItemType.Link,
      value: 'admin',
      label: t('navbar.admin-panel'),
      href: AppRoute.AdminPanel(),
    }]) : []),
    {
      type: DropDownItemType.Link,
      value: 'profile',
      label: t('navbar.profile'),
      href: AppRoute.Profile(userId),
    },
    {
      type: DropDownItemType.Button,
      value: 'logout',
      label: t('navbar.logout'),
      onClick: onLogout,
    },
  ]), [onLogout, userId, t, isAdminPanelAvailable]);

  // todo: make props ?
  if (!userId) {
    return null;
  }

  return (
    <DropDown
      className={className}
      trigger={(
        <Button>
          <Avatar size={30} src={authData.avatar} />
        </Button>
      )}
      items={dropDownItems}
    />
  );
});

AvatarMenu.displayName = 'AvatarMenu';
