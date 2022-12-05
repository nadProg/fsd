import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button';

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
      className={className}
      onClick={toggle}
    >
      {t(short ? 'sidebar.short-language' : 'sidebar.language')}
    </Button>
  );
}
