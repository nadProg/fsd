import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const ArticlesPageAsync = lazy(async () => {
  await asyncDelay(300);
  return import('./ArticlesPage').then(({ ArticlesPage }) => makeModuleDefault(ArticlesPage));
});
