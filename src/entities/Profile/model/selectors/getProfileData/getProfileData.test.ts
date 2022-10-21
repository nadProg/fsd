import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { Country, Currency } from 'shared/constants/common';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          username: 'username',
          lastname: 'lastname',
          age: 30,
          city: 'city',
          country: Country.Armenia,
          currency: Currency.Eur,
          avatar: null,
        },
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(
      {
        username: 'username',
        lastname: 'lastname',
        age: 30,
        city: 'city',
        country: Country.Armenia,
        currency: Currency.Eur,
        avatar: null,
      },
    );
  });

  test('should handle empty state profile', () => {
    expect(getProfileData({} as StateSchema)).toBeUndefined();
  });
});