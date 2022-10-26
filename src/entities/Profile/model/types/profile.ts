import { ValuesOfCurrency } from 'entities/Currency';
import { ValuesOfCountry } from 'entities/Country';

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

export type ProfileSchema = {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
};
