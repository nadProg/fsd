import { useTranslation } from 'react-i18next';

import { Page } from 'shared/ui/Page';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('about.title')}</h1>
      <p>{t('about.content')}</p>
    </Page>
  );
};
