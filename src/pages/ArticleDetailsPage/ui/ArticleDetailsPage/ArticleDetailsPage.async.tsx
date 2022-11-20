import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const ArticleDetailsPageAsync = lazy(async () => {
  await asyncDelay(300);
  return import('./ArticleDetailsPage').then(({ ArticleDetailsPage }) => makeModuleDefault(ArticleDetailsPage));
});
