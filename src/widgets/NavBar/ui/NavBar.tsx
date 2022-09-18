import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NavBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(styles.Navbar, {}, [className])}>
    <div className={classNames(styles.links)}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
    </div>
  </div>
);
