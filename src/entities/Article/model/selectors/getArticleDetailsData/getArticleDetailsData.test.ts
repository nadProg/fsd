import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { Article, ArticleType } from '../../types/article';
import { getArticleDetailsData } from './getArticleDetailsData';

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

describe('getArticleDetailsData', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: mockData,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(mockData);
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsData({} as StateSchema)).toBeUndefined();
  });
});
