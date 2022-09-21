import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const AboutPageAsync = lazy(async () => {
  await asyncDelay();
  return import('./AboutPage').then(({ AboutPage }) => makeModuleDefault(AboutPage));
});
