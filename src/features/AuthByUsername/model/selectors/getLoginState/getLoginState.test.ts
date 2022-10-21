import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'password',
        username: 'username',
        isSubmitting: false,
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      password: 'password',
      username: 'username',
      isSubmitting: false,
    });
  });

  test('should handle empty state', () => {
    expect(getLoginState({} as StateSchema)).toBeUndefined();
  });
});
