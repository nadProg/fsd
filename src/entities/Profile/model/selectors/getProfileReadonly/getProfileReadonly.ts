import { createSelector } from '@reduxjs/toolkit';

import { getProfileData } from '../getProfileData/getProfileData';

export const getProfileReadonly = createSelector(getProfileData, (profile) => profile?.firstname || '');
