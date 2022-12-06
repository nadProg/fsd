import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from '@/shared/helpers';

export const MainPageAsync = lazy(async () => {
  await asyncDelay(300);
  return import('./MainPage').then(({ MainPage }) => makeModuleDefault(MainPage));
});
