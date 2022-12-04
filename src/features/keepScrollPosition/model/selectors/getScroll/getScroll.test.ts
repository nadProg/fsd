import { StateSchema } from 'app/providers/StoreProvider';

import { DeepPartial } from 'shared/types';
import { getScroll } from './getScroll';

describe('getScroll', () => {
  test('should return scroll state', () => {
    const state: DeepPartial<StateSchema> = {
      scrollPosition: {
        scroll: {
          '/': 100,
          '/root': 200,
        },
      },
    };
    expect(getScroll(state as StateSchema)).toEqual({
      '/': 100,
      '/root': 200,
    });
  });
});
