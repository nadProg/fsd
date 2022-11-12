import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageLimit = createSelector(getArticlesPage, (state) => state.limit);
