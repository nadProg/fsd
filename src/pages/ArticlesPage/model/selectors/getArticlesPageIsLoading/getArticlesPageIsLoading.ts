import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageIsLoading = createSelector(getArticlesPage, (state) => state?.isLoading);
