import { AppLink } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTheme } from 'shared/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NavBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => {
  const { toggleTheme } = useTheme();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.Clear} onClick={toggleTheme}>Сменить тему</Button>
      <div className={classNames(styles.links)}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О нас</AppLink>
      </div>
    </div>
  );
};
