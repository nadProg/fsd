import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsRecommendations } from '../getArticleDetailsRecommendations/getArticleDetailsRecommendations';

export const getArticleDetailsRecommendationsIsLoading = createSelector(
  getArticleDetailsRecommendations,
  (state) => state?.isLoading,
);
