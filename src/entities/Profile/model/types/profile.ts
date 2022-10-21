import { ValuesOf } from 'shared/types';
import { Country, Currency } from 'shared/constants/common';

export type Profile = {
  firstname: string;
  lastname: string
  age: number;
  currency: ValuesOf<typeof Currency>;
  country: ValuesOf<typeof Country>;
  city: string;
  username: string;
  avatar: string;
};

export type ProfileSchema = {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
};
