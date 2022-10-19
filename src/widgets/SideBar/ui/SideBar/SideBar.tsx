import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import styles from './SideBar.module.scss';

type SideBarProps = {
  className?: string;
};

export function SideBar({ className }: SideBarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);

  return (
    <div
      data-testid="sidebar"
      className={classNames(className, styles.SideBar, { [styles.collapsed]: collapsed })}
    >
      <Button
        data-testid="sidebar-toggle"
        className={styles.collapseBtn}
        theme={ButtonTheme.BackgroundInverted}
        size={ButtonSize.Large}
        square
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.links}>
        <AppLink
          className={styles.link}
          to={RoutePath.main}
        >
          <HomeIcon className={styles.linkIcon} />
          <span>{t('navbar.main')}</span>
        </AppLink>
        <AppLink
          className={styles.link}
          to={RoutePath.about}
        >
          <AboutIcon className={styles.linkIcon} />
          <span>
            {t('navbar.about')}
          </span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
}
