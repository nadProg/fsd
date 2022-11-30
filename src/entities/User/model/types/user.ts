import { ValuesOf } from 'shared/types';

export const UserRole = {
  User: 'USER',
  Manager: 'MANAGER',
  Admin: 'ADMIN',
} as const;

export type ValuesOfUserRole = ValuesOf<typeof UserRole>;

export type User = {
  id: string;
  username: string;
  avatar?: string;
  roles?: ValuesOfUserRole[];
};

export type UserSchema = {
  authData?: User;
  __initialized__: boolean;
};
