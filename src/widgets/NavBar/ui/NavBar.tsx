import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NavBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(styles.Navbar, {}, [className])} />
);
