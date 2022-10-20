import { lazy } from 'react';

import { asyncDelay, makeModuleDefault } from 'shared/helpers';

export const LoginFormAsync = lazy(async () => {
  await asyncDelay(300);
  return import('./LoginForm').then(({ LoginForm }) => makeModuleDefault(LoginForm));
});
