import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '../../types/user';
import { getUserAuthDataRoles } from '../getUserAuthDataRoles/getUserAuthDataRoles';

export const getIsUserAdmin = createSelector(
  getUserAuthDataRoles,
  (roles) => roles?.includes(UserRole.Admin) ?? false,
);
