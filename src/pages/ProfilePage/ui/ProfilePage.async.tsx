import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const ProfilePageAsync = lazy(async () => {
  await asyncDelay(300);
  return import('./ProfilePage').then(({ ProfilePage }) => makeModuleDefault(ProfilePage));
});
