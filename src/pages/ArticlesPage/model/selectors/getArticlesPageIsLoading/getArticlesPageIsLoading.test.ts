import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageIsLoading } from './getArticlesPageIsLoading';

describe('getArticlesPageIsLoading', () => {
  test('should return hasMore status', () => {
    const trueState: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };

    const falseState: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
      },
    };

    expect(getArticlesPageIsLoading(trueState as StateSchema)).toBe(true);
    expect(getArticlesPageIsLoading(falseState as StateSchema)).toBe(false);
  });

  test('should handle empty state as true', () => {
    expect(getArticlesPageIsLoading({} as StateSchema)).toBe(true);
  });
});
