import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import styles from './PageError.module.scss';

type PageErrorProps = {
  className?: string;
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('page_error.title')}</p>

      <Button theme={ButtonTheme.Clear} onClick={reloadPage}>{t('page_error.refresh')}</Button>
    </div>
  );
};
