import { ValuesOf } from '@/shared/types';

import { Profile } from '@/entities/Profile';

export const ValidateProfileError = {
  NoData: 'NO_DATA',
  IncorrectUserData: 'INCORRECT_USER_DATA',
  IncorrectAge: 'INCORRECT_AGE',
  IncorrectCountry: 'INCORRECT_COUNTRY',
  ServerError: 'SERVER_ERROR',
} as const;

export type ValuesOfValidateProfileError = ValuesOf<typeof ValidateProfileError>;

export type EditableProfileCardSchema = {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValuesOfValidateProfileError[];
};
