import { ValuesOf } from 'shared/types';

export const UserRole = {
  User: 'user',
  Manager: 'manager',
  Admin: 'admin',
} as const;

export type ValuesOfUserRole = ValuesOf<typeof UserRole>;

export type User = {
  id: string;
  username: string;
  avatar?: string;
  roles?: ValuesOfUserRole[]; // todo: should be required
};

export type UserSchema = {
  authData?: User;
  __initialized__: boolean;
};
