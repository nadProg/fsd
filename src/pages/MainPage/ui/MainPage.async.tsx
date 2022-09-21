import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const MainPageAsync = lazy(async () => {
  await asyncDelay();
  return import('./MainPage').then(({ MainPage }) => makeModuleDefault(MainPage));
});
