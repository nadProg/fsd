import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import styles from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
  short?: boolean;
};

export function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  // todo: fix ru != ru-RU
  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      theme={ButtonTheme.Background}
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t(short ? 'sidebar.short-language' : 'sidebar.language')}
    </Button>
  );
}
