import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
      },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });

  test('should handle empty state', () => {
    expect(getLoginUsername({} as StateSchema)).toBe('');
  });
});
