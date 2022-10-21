import { Profile, ProfileSchema } from './model/types/profile';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  profileActions, profileReducer, fetchProfileData, ProfileCard,
};

export type { Profile, ProfileSchema };
