import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { DeepPartial } from '@/shared/types';
import { fetchArticleDetailsData } from './fetchArticleDetailsData';
import { Article, ArticleType } from '../../types/article';

const mockDataId = '1';

const mockData: DeepPartial<Article> = {
  id: mockDataId,
  title: 'title',
  subtitle: 'subtitle',
  img: '',
  views: 1,
  types: [ArticleType.It],
  blocks: [],
  createdAt: '22.22.2022',
};

describe('fetchArticleDetailsData', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        data: mockData,
      }),
    );

    const result = await thunk.callThunk(mockDataId);

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.get).toHaveBeenCalled();

    expect(result.payload).toEqual(mockData);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );

    const result = await thunk.callThunk(mockDataId);

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should return error if no data returned', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        data: undefined,
      }),
    );

    const result = await thunk.callThunk(mockDataId);

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
