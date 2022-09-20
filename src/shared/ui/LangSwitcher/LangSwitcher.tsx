import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from '../Button';

import styles from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () =>
    // todo: fix ru != ru-RU
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      theme={ButtonTheme.Clear}
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
