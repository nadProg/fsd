import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsComments } from '../getArticleDetailsComments/getArticleDetailsComments';

export const getArticleDetailsCommentsIsLoading = createSelector(
  getArticleDetailsComments,
  (state) => state?.isLoading ?? true,
);
