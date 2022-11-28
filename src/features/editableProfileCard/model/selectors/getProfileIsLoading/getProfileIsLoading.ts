import { createSelector } from '@reduxjs/toolkit';

import { getProfile } from '../getProfile/getProfile';

export const getProfileIsLoading = createSelector(getProfile, (profile) => profile?.isLoading ?? true);
