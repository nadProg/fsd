import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import('./AboutPage');
});
