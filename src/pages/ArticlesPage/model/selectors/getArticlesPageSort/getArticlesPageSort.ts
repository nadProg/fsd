import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageSort = createSelector(getArticlesPage, (state) => state?.sort);
