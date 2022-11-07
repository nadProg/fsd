import { createSelector } from '@reduxjs/toolkit';

import { getAddCommentForm } from '../getAddCommentForm/getAddCommentForm';

export const getAddCommentFormText = createSelector(getAddCommentForm, (state) => state?.text ?? '');
