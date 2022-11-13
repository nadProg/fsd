import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageInitialized = createSelector(
  getArticlesPage,
  /* eslint-disable no-underscore-dangle */
  (state) => state.__initialized__,
);
