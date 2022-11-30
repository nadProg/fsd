import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { UserRole } from '../../types/user';
import { getIsUserManager } from './getIsUserManager';

describe('getIsUserManager', () => {
  test('should return manager role status', () => {
    const managerState: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
          roles: [UserRole.User, UserRole.Manager],
        },
      },
    };
    const noManagerState: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
          roles: [UserRole.User, UserRole.Admin],
        },
      },
    };

    expect(getIsUserManager(managerState as StateSchema)).toBe(true);
    expect(getIsUserManager(noManagerState as StateSchema)).toBe(false);
  });

  test('should handle empty roles', () => {
    const stateWithNoRoles: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    };

    const stateEmptyRoles: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
          roles: [],
        },
      },
    };

    expect(getIsUserManager(stateWithNoRoles as StateSchema)).toBe(false);
    expect(getIsUserManager(stateEmptyRoles as StateSchema)).toBe(false);
  });

  test('should handle initial state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        __initialized__: false,
      },
    };

    expect(getIsUserManager(state as StateSchema)).toBe(false);
  });
});
