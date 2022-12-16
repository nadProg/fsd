import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Page } from '@/widgets/Page';

import styles from './NotFoundPage.module.scss';

type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(className, styles.NotFoundPage)}>
      {t('not_found.title')}
    </Page>
  );
};
