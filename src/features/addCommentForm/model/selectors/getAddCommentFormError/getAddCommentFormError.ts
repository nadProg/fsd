import { createSelector } from '@reduxjs/toolkit';

import { getAddCommentForm } from '../getAddCommentForm/getAddCommentForm';

export const getAddCommentFormError = createSelector(getAddCommentForm, (state) => state?.error);
