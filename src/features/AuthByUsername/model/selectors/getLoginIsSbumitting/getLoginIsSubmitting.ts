import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginIsSubmitting = createSelector(getLoginState, (state) => state?.isSubmitting ?? false);
