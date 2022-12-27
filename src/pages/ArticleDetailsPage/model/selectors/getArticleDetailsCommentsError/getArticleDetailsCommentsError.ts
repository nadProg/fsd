import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsComments } from '../getArticleDetailsComments/getArticleDetailsComments';

export const getArticleDetailsCommentsError = createSelector(getArticleDetailsComments, (state) => state?.error);
