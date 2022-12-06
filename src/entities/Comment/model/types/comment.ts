import { Id } from '@/shared/types';
import { User } from '@/entities/User';

export type Comment = {
  id: Id;
  user: User;
  text: string;
};
