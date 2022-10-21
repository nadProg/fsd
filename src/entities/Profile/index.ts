import { Profile, ProfileSchema } from './model/types/profile';
import { profileReducer, profileActions } from './model/slice/profileSlice';

export { profileActions, profileReducer };

export type { Profile, ProfileSchema };
