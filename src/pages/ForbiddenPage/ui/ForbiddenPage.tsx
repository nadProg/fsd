import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

import styles from './ForbiddenPage.module.scss';

export const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page className={styles.NotFoundPage} data-testid="forbidden-page">
      {t('forbidden.title')}
    </Page>
  );
};
