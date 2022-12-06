import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page';

import styles from './ForbiddenPage.module.scss';

export const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page className={styles.NotFoundPage}>
      {t('forbidden.title')}
    </Page>
  );
};
