import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { getUserInitialized } from './getUserInitialized';

describe('getUserInited', () => {
  test('should return user initialized', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        __initialized__: true,
      },
    };

    expect(getUserInitialized(state as StateSchema)).toBe(true);
  });
});
