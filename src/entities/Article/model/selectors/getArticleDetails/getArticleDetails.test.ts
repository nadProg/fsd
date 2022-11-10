import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';

import { Article, ArticleType } from '../../types/article';
import { getArticleDetails } from './getArticleDetails';

const mockData: Article = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: '',
  views: 1,
  types: [ArticleType.It],
  blocks: [],
  createdAt: '22.22.2022',
};

describe('getArticleDetails', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: mockData,
        isLoading: false,
      },
    };

    expect(getArticleDetails(state as StateSchema)).toEqual({
      data: mockData,
      isLoading: false,
    });
  });

  test('should handle empty state', () => {
    expect(getArticleDetails({} as StateSchema)).toBeUndefined();
  });
});
