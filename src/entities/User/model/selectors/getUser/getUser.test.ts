import { DeepPartial } from '@/shared/types';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getUser } from './getUser';

describe('getUser', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    };

    expect(getUser(state as StateSchema)).toEqual({
      authData: {
        id: '1',
        username: 'username',
      },
    });
  });
});
