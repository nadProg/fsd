import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { AppLink } from 'shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { getSideBarItems } from '../../model/selectors/getSideBarItems';

import styles from './SideBar.module.scss';

type SideBarProps = {
  className?: string;
};

export function SideBar({ className }: SideBarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItems = useSelector(getSideBarItems);

  const onToggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);

  return (
    <section
      data-testid="sidebar"
      className={classNames(className, styles.SideBar, { [styles.collapsed]: collapsed })}
    >
      <nav className={styles.nav}>
        {sidebarItems.map(({
          key, icon: Icon, path,
        }) => (
          <AppLink
            key={key}
            className={styles.navLink}
            to={path}
          >
            <Icon className={styles.navLinkIcon} />
            <span>{t(`navbar.${key}`)}</span>
          </AppLink>
        ))}

      </nav>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>

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
    </section>
  );
}
