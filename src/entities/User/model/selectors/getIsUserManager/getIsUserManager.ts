import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '../../types/user';
import { getUserAuthDataRoles } from '../getUserAuthDataRoles/getUserAuthDataRoles';

export const getIsUserManager = createSelector(
  getUserAuthDataRoles,
  (roles) => roles?.includes(UserRole.Manager) ?? false,
);
