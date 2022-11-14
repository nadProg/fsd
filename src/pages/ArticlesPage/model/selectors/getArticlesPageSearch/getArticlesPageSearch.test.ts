import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageSearch } from './getArticlesPageSearch';

describe('getArticlesPageSearch', () => {
  test('should return search', () => {
    const shortState: DeepPartial<StateSchema> = {
      articlesPage: {
        search: 'search',
      },
    };

    const longState: DeepPartial<StateSchema> = {
      articlesPage: {
        search: 'search search search',
      },
    };

    expect(getArticlesPageSearch(shortState as StateSchema)).toBe('search');
    expect(getArticlesPageSearch(longState as StateSchema)).toBe('search search search');
  });

  test('should handle empty state as empty string', () => {
    expect(getArticlesPageSearch({} as StateSchema)).toBe('');
  });
});
