import { createSelector } from '@reduxjs/toolkit';

import { getUser } from '../getUser/getUser';

// eslint-disable-next-line no-underscore-dangle
export const getUserInitialized = createSelector(getUser, (user) => user.__initialized__);
