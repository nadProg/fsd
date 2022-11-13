import { userReducer, userActions } from './model/slice/userSlice/userSlice';
import { User, UserSchema } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInitialized } from './model/selectors/getUserInitialized/getUserInitialized';

export {
  userActions, userReducer, getUserAuthData, getUserInitialized,
};
export type { User, UserSchema };
