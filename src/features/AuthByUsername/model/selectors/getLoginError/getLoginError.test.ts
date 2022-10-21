import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'Error',
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual('Error');
  });

  test('should handle empty state', () => {
    expect(getLoginError({} as StateSchema)).toBe('');
  });
});
