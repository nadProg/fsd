import { userReducer, userActions } from './model/slice/userSlice/userSlice';
import { User, UserSchema } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInitialized } from './model/selectors/getUserInitialized/getUserInitialized';
import { getIsUserAdmin } from './model/selectors/getIsUserAdmin/getIsUserAdmin';
import { getIsUserManager } from './model/selectors/getIsUserManager/getIsUserManager';

export {
  userActions,
  userReducer,
  getUserAuthData,
  getUserInitialized,
  getIsUserAdmin,
  getIsUserManager,
};

export type { User, UserSchema };
