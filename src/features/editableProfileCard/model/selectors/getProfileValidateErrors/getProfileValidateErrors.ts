import { createSelector } from '@reduxjs/toolkit';

import { getProfile } from '../getProfile/getProfile';

export const getProfileValidateErrors = createSelector(getProfile, (profile) => profile?.validateErrors);
