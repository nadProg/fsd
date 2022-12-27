import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageSearch = createSelector(getArticlesPage, (state) => state?.search);
