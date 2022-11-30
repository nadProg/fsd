import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { UserRole } from '../../types/user';
import { getIsUserAdmin } from './getIsUserAdmin';

describe('getIsUserAdmin', () => {
  test('should return admin role status', () => {
    const adminState: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
          roles: [UserRole.User, UserRole.Admin],
        },
      },
    };

    const noAdminState: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'username',
          roles: [UserRole.User, UserRole.Manager],
        },
      },
    };

    expect(getIsUserAdmin(adminState as StateSchema)).toBe(true);
    expect(getIsUserAdmin(noAdminState as StateSchema)).toBe(false);
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

    expect(getIsUserAdmin(stateWithNoRoles as StateSchema)).toBe(false);
    expect(getIsUserAdmin(stateEmptyRoles as StateSchema)).toBe(false);
  });

  test('should handle initial state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        __initialized__: false,
      },
    };

    expect(getIsUserAdmin(state as StateSchema)).toBe(false);
  });
});
