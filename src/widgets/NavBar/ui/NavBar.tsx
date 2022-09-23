import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import styles from './NavBar.module.scss';

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <AppLink to="/">{t('navbar.main')}</AppLink>
        <AppLink to="/about">{t('navbar.about')}</AppLink>
      </div>
    </div>
  );
};
