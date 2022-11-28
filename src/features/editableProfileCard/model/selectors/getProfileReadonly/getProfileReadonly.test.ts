import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return profile readonly state', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        readonly: false,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toBe(false);
  });

  test('should handle empty state profile', () => {
    expect(getProfileReadonly({} as StateSchema)).toBe(true);
  });
});
