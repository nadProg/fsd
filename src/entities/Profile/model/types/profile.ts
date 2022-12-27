import { Id } from '@/shared/types';

import { ValuesOfCurrency } from '@/entities/Currency';
import { ValuesOfCountry } from '@/entities/Country';

export type Profile = {
  id?: Id;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: ValuesOfCurrency;
  country?: ValuesOfCountry;
  city?: string;
  username?: string;
  avatar?: string;
};
