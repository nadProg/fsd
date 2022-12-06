import { DeepPartial } from '@/shared/types';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileData', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        error: 'error',
      },
    };

    expect(getProfileError(state as StateSchema)).toBe('error');
  });

  test('should handle empty profile error', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {},
    };

    expect(getProfileError(state as StateSchema)).toBeUndefined();
  });

  test('should handle empty state profile', () => {
    expect(getProfileError({} as StateSchema)).toBeUndefined();
  });
});
