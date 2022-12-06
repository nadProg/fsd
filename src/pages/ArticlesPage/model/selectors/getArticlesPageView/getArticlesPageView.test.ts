import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlesPageView } from './getArticlesPageView';

describe('getArticlesPageView', () => {
  test('should return page', () => {
    const gridState: DeepPartial<StateSchema> = {
      articlesPage: {
        view: 'grid',
      },
    };

    const listState: DeepPartial<StateSchema> = {
      articlesPage: {
        view: 'list',
      },
    };

    expect(getArticlesPageView(gridState as StateSchema)).toBe('grid');
    expect(getArticlesPageView(listState as StateSchema)).toBe('list');
  });

  test('should handle empty state as list', () => {
    expect(getArticlesPageView({} as StateSchema)).toBe('list');
  });
});
