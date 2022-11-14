import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPageSort } from './getArticlesPageSort';

describe('getArticlesPageSort', () => {
  test('should return sort', () => {
    const viewsState: DeepPartial<StateSchema> = {
      articlesPage: {
        sort: 'views',
      },
    };

    const createdAtState: DeepPartial<StateSchema> = {
      articlesPage: {
        sort: 'createdAt',
      },
    };

    const titleState: DeepPartial<StateSchema> = {
      articlesPage: {
        sort: 'title',
      },
    };

    expect(getArticlesPageSort(viewsState as StateSchema)).toBe('views');
    expect(getArticlesPageSort(createdAtState as StateSchema)).toBe('createdAt');
    expect(getArticlesPageSort(titleState as StateSchema)).toBe('title');
  });

  test('should handle empty state as asc', () => {
    expect(getArticlesPageSort({} as StateSchema)).toBe('views');
  });
});
