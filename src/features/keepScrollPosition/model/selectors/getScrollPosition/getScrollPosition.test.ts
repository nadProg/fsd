import { StateSchema } from '@/app/providers/StoreProvider';

import { DeepPartial } from '@/shared/types';
import { getScrollPosition } from './getScrollPosition';

describe('getScrollPosition', () => {
  test('should return scroll position', () => {
    const state: DeepPartial<StateSchema> = {
      scrollPosition: {
        scroll: {
          '/': 100,
          '/root': 200,
        },
      },
    };
    expect(getScrollPosition(state as StateSchema, '/')).toBe(100);
    expect(getScrollPosition(state as StateSchema, '/root')).toBe(200);
  });

  test('should handle non-existent route', () => {
    const state: DeepPartial<StateSchema> = {
      scrollPosition: {
        scroll: { },
      },
    };
    expect(getScrollPosition(state as StateSchema, '/')).toBe(0);
    expect(getScrollPosition(state as StateSchema, '/root')).toBe(0);
  });
});
