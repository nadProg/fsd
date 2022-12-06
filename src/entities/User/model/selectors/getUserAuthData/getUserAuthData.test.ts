import { DeepPartial } from '@/shared/types';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: '1',
      username: 'username',
    });
  });
});
