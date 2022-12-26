import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

import { Counter } from '@/entities/Counter';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="main-page">
      <h1>{t('main.title')}</h1>
      <p>{t('main.content')}</p>

      <Counter />
    </Page>
  );
};
