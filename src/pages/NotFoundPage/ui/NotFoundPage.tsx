import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import styles from './NotFoundPage.module.scss';

type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(className, styles.NotFoundPage)}>
      {t('not_found.title')}
    </div>
  );
};
