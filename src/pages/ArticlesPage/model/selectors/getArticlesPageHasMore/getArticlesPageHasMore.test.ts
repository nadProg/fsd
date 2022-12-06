import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlesPageHasMore } from './getArticlesPageHasMore';

describe('getArticlesPageHasMore', () => {
  test('should return hasMore status', () => {
    const trueState: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: true,
      },
    };

    const falseState: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: false,
      },
    };

    expect(getArticlesPageHasMore(trueState as StateSchema)).toBe(true);
    expect(getArticlesPageHasMore(falseState as StateSchema)).toBe(false);
  });

  test('should handle empty state as true', () => {
    expect(getArticlesPageHasMore({} as StateSchema)).toBe(true);
  });
});
