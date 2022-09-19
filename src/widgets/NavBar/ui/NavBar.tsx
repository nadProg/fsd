import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NavBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О нас</AppLink>
      </div>
    </div>
  );
};
