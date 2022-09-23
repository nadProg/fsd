import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from '../Button';

import styles from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  // todo: fix ru != ru-RU
  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      theme={ButtonTheme.Clear}
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t('sidebar.language')}
    </Button>
  );
}
