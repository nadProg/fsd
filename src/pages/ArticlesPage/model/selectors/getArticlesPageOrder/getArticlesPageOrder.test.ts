import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlesPageOrder } from './getArticlesPageOrder';

describe('getArticlesPageOrder', () => {
  test('should return order', () => {
    const ascState: DeepPartial<StateSchema> = {
      articlesPage: {
        order: 'asc',
      },
    };

    const descState: DeepPartial<StateSchema> = {
      articlesPage: {
        order: 'desc',
      },
    };

    expect(getArticlesPageOrder(ascState as StateSchema)).toBe('asc');
    expect(getArticlesPageOrder(descState as StateSchema)).toBe('desc');
  });

  test('should handle empty state as asc', () => {
    expect(getArticlesPageOrder({} as StateSchema)).toBe('asc');
  });
});
