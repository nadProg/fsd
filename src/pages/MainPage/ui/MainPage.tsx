import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('main.title')}</h1>
      <p>{t('main.content')}</p>

      <Counter />
    </div>
  );
};
