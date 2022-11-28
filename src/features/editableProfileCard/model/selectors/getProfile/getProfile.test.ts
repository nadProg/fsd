import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { getProfile } from './getProfile';

describe('getProfile', () => {
  test('should return profile', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        isLoading: false,
        data: {
          username: 'username',
          lastname: 'lastname',
          age: 30,
          city: 'city',
          country: Country.Armenia,
          currency: Currency.Eur,
          avatar: '',
        },
        readonly: false,
      },
    };

    expect(getProfile(state as StateSchema)).toEqual({
      isLoading: false,
      data: {
        username: 'username',
        lastname: 'lastname',
        age: 30,
        city: 'city',
        country: Country.Armenia,
        currency: Currency.Eur,
        avatar: '',
      },
      readonly: false,
    });
  });

  test('should handle empty state profile', () => {
    expect(getProfile({} as StateSchema)).toBeUndefined();
  });
});
