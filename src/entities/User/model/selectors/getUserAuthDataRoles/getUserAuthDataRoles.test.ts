import { DeepPartial } from '@/shared/types';

import { StateSchema } from '@/app/providers/StoreProvider';

import { UserRole } from '../../types/user';
import { getUserAuthDataRoles } from './getUserAuthDataRoles';

describe('getUserAuthDataRoles', () => {
  test('should return user roles', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
          roles: [UserRole.User, UserRole.Manager],
        },
      },
    };

    expect(getUserAuthDataRoles(state as StateSchema)).toEqual([UserRole.User, UserRole.Manager]);
  });

  test('should handle empty roles', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    };

    expect(getUserAuthDataRoles(state as StateSchema)).toBeUndefined();
  });

  test('should handle initial state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        __initialized__: false,
      },
    };

    expect(getUserAuthDataRoles(state as StateSchema)).toBeUndefined();
  });
});
