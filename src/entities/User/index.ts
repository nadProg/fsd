import { userReducer, userActions } from './model/slice/userSlice/userSlice';
import {
  User, UserSchema, ValuesOfUserRole, UserRole,
} from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInitialized } from './model/selectors/getUserInitialized/getUserInitialized';
import { getIsUserAdmin } from './model/selectors/getIsUserAdmin/getIsUserAdmin';
import { getIsUserManager } from './model/selectors/getIsUserManager/getIsUserManager';
import { getUserAuthDataRoles } from './model/selectors/getUserAuthDataRoles/getUserAuthDataRoles';

export {
  userActions,
  UserRole,
  userReducer,
  getUserAuthData,
  getUserInitialized,
  getIsUserAdmin,
  getIsUserManager,
  getUserAuthDataRoles,
};

export type { User, UserSchema, ValuesOfUserRole };
