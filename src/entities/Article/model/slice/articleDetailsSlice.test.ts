import { DeepPartial } from 'shared/types';

import { fetchArticleDetailsData } from '../services/fetchArticleDetailsData/fetchArticleDetailsData';
import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article, ArticleType } from '../types/article';

const mockData: Article = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: '',
  views: 1,
  type: [ArticleType.It],
  blocks: [],
  createdAt: '22.22.2022',
};

describe('ArticleDetailsSlice', () => {
  test('should handle fetch article details data service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      error: 'error',
      isLoading: false,
    };

    const action = fetchArticleDetailsData.pending;

    expect(articleDetailsReducer(state as ArticleDetailsSchema, action))
      .toEqual({
        isLoading: true,
      });
  });

  test('should handle fetch article details data service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    const action = fetchArticleDetailsData.fulfilled(mockData, '', mockData.id);

    expect(articleDetailsReducer(state as ArticleDetailsSchema, action))
      .toEqual({
        data: mockData,
        isLoading: false,
      });
  });

  test('should handle fetch article details data service rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    const action = fetchArticleDetailsData.rejected(null, '', mockData.id, 'error');

    expect(articleDetailsReducer(state as ArticleDetailsSchema, action))
      .toEqual({
        error: 'error',
        isLoading: false,
      });
  });
});
