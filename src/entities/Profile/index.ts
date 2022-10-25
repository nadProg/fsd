import { Profile, ProfileSchema } from './model/types/profile';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';

export {
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
};

export type { Profile, ProfileSchema };
