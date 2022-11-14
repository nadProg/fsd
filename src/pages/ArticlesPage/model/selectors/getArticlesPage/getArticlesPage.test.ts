import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesPage } from './getArtcilesPage';

describe('getArticlesPage', () => {
  test('should return articles page state', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: false,
        page: 10,
        limit: 2,
        view: 'grid',
        order: 'desc',
        search: 'search',
        sort: 'createdAt',
        type: 'ECONOMICS',
      },
    };

    expect(getArticlesPage(state as StateSchema)).toEqual({
      ids: [],
      entities: {},
      isLoading: false,
      hasMore: false,
      page: 10,
      limit: 2,
      view: 'grid',
      order: 'desc',
      search: 'search',
      sort: 'createdAt',
      type: 'ECONOMICS',
    });
  });

  test('should return empty state as initial values', () => {
    expect(getArticlesPage({} as StateSchema)).toEqual({
      ids: [],
      entities: {},
      isLoading: true,
      hasMore: true,
      page: 1,
      limit: 3,
      view: 'list',
      sort: 'views',
      order: 'asc',
      search: '',
      type: 'ALL',
    });
  });
});
