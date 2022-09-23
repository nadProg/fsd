import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import styles from './NotFoundPage.module.scss';

type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t('not_found.title')}
    </div>
  );
};
