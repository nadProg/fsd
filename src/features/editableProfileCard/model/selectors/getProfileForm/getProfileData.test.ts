import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        form: {
          username: 'username',
          lastname: 'lastname',
          age: 30,
          city: 'city',
          country: Country.Armenia,
          currency: Currency.Eur,
          avatar: '',
        },
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(
      {
        username: 'username',
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
    expect(getProfileForm({} as StateSchema)).toBeUndefined();
  });
});
