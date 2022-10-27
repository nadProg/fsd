import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors', () => {
  test('should return profile validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.IncorrectAge,
          ValidateProfileError.IncorrectUserData,
        ],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(
      [
        ValidateProfileError.IncorrectAge,
        ValidateProfileError.IncorrectUserData,
      ],
    );
  });

  test('should handle empty state profile', () => {
    expect(getProfileValidateErrors({} as StateSchema)).toBeUndefined();
  });
});
