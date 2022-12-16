import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Button, ButtonTheme } from '@/shared/ui/Button';
import type { PropsWithClassName } from '@/shared/types';

import styles from './PageError.module.scss';

export const PageError = ({ className }: PropsWithClassName) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={classNames(className, styles.PageError)}>
      <p>{t('page_error.title')}</p>

      <Button theme={ButtonTheme.Clear} onClick={reloadPage}>{t('page_error.refresh')}</Button>
    </div>
  );
};
