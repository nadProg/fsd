import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsRecommendations } from '../getArticleDetailsRecommendations/getArticleDetailsRecommendations';

export const getArticleDetailsRecommendationsError = createSelector(
  getArticleDetailsRecommendations,
  (state) => state?.error,
);
