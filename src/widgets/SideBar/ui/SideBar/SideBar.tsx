import { useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import styles from './SideBar.module.scss';

type SideBarProps = {
  className?: string;
};

export function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);

  return (
    <div
      className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button theme={ButtonTheme.Clear} onClick={onToggle}>
        Toggle
      </Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
