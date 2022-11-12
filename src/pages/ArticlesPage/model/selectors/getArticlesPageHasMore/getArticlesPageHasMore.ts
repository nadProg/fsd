import { createSelector } from '@reduxjs/toolkit';

import { getArticlesPage } from '../getArticlesPage/getArtcilesPage';

export const getArticlesPageHasMore = createSelector(getArticlesPage, (state) => state.hasMore);
