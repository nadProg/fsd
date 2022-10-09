import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

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
      className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" theme={ButtonTheme.Clear} onClick={onToggle}>
        {t('sidebar.toggle')}
      </Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
