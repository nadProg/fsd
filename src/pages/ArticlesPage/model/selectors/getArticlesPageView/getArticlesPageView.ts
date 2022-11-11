import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageView = createSelector(getArticlesPage, (state) => state?.view);
