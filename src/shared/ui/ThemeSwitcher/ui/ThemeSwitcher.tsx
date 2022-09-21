import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTheme } from 'shared/providers/ThemeProvider';

import ThemeIcon from 'shared/assets/icons/theme-light.svg';

import styles from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
  className?: string;
};

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.Clear}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon className={styles.icon} />
    </Button>
  );
}
