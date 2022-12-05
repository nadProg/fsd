import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { VStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';

import { LangSwitcher } from 'features/langSwitcher';
import { ThemeSwitcher } from 'features/themeSwitcher';

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

  const toggleLabel = collapsed ? 'Expand sidebar' : 'Collapse sidebar';

  return (
    <section
      id="sidebar"
      data-testid="sidebar"
      className={classNames(className, styles.SideBar, { [styles.collapsed]: collapsed })}
    >
      <VStack gap={8}>
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
      </VStack>

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
        aria-expanded={!collapsed}
        aria-controls="sidebar"
        aria-label={toggleLabel}
      >
        <span aria-hidden="true">
          {collapsed ? '>' : '<'}
        </span>
      </Button>
    </section>
  );
}
