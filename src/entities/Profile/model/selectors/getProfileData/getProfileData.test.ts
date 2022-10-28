import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          username: 'username',
          firstname: 'firstname',
          lastname: 'lastname',
          age: 30,
          city: 'city',
          country: Country.Armenia,
          currency: Currency.Eur,
          avatar: '',
        },
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(
      {
        username: 'username',
        firstname: 'firstname',
        lastname: 'lastname',
        age: 30,
        city: 'city',
        country: Country.Armenia,
        currency: Currency.Eur,
        avatar: '',
      },
    );
  });

  test('should handle empty state profile', () => {
    expect(getProfileData({} as StateSchema)).toBeUndefined();
  });
});
