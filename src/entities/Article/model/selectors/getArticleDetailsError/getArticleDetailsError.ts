import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetails } from '../getArticleDetails/getArticleDetails';

export const getArticleDetailsError = createSelector(getArticleDetails, (state) => state?.error);
