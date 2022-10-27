import { ValuesOfCurrency } from 'entities/Currency';
import { ValuesOfCountry } from 'entities/Country';
import { ValuesOf } from 'shared/types';

export type Profile = {
  firstname?: string;
  lastname?: string
  age?: number;
  currency?: ValuesOfCurrency;
  country?: ValuesOfCountry;
  city?: string;
  username?: string;
  avatar?: string;
};

export const ValidateProfileError = {
  NoData: 'NO_DATA',
  IncorrectUserData: 'INCORRECT_USER_DATA',
  IncorrectAge: 'INCORRECT_AGE',
  IncorrectCountry: 'INCORRECT_COUNTRY',
  ServerError: 'SERVER_ERROR',
} as const;

export type ValuesOfValidateProfileError = ValuesOf<typeof ValidateProfileError>;

export type ProfileSchema = {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValuesOfValidateProfileError[];
};
