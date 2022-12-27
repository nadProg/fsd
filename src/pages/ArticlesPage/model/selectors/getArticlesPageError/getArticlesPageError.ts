import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageError = createSelector(getArticlesPage, (state) => state.error);
