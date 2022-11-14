import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageOrder = createSelector(
  getArticlesPage,
  (state) => state?.order,
);
