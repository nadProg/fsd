import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '../getUserAuthData/getUserAuthData';

export const getUserAuthDataRoles = createSelector(getUserAuthData, (authData) => authData?.roles);
