import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetails } from '../getArticleDetails/getArticleDetails';

export const getArticleDetailsIsLoading = createSelector(getArticleDetails, (state) => state?.isLoading ?? true);
