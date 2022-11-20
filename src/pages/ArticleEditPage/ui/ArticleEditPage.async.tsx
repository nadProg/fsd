import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const ArticleEditPageAsync = lazy(async () => {
  await asyncDelay(300);
  return import('./ArticleEditPage').then(({ ArticleEditPage }) => makeModuleDefault(ArticleEditPage));
});
