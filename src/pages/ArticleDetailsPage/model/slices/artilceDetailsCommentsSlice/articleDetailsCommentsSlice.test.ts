import { DeepPartial } from '@/shared/types';
import { Comment } from '@/entities/Comment';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { fetchArticleDetailsComments } from '../../services/fetchArticleDetailsComments/fetchArticleDetailsComments';
import { ArticleDetailsCommentsSchema } from '../../types/articleDetailsCommentsSchema';

const mockArticleId = '1';

const mockComment1: Comment = {
  id: '1',
  text: 'text',
  user: {
    id: '1',
    username: 'username',
    avatar: 'avatar',
  },
};

const mockComment2: Comment = {
  id: '2',
  text: 'text 2',
  user: {
    id: '1',
    username: 'username',
    avatar: 'avatar',
  },
};

const mockComment3: Comment = {
  id: '3',
  text: 'text 3',
  user: {
    id: '2',
    username: 'username 2',
  },
};

const mockData: Comment[] = [mockComment1, mockComment2, mockComment3];

const mockCommentIds = [mockComment1.id, mockComment2.id, mockComment3.id];

const mockCommentEntities = {
  [mockComment1.id]: mockComment1,
  [mockComment2.id]: mockComment2,
  [mockComment3.id]: mockComment3,
};

describe('articleDetailsCommentsSlice', () => {
  test('should handle fetch article details comments data service pending', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      error: 'error',
      isLoading: false,
    };

    const action = fetchArticleDetailsComments.pending;

    expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, action))
      .toEqual({
        isLoading: true,
      });
  });

  test('should handle fetch article details comments data service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
    };

    const action = fetchArticleDetailsComments.fulfilled(mockData, '', mockArticleId);

    expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, action))
      .toEqual({
        ids: mockCommentIds,
        entities: mockCommentEntities,
        isLoading: false,
      });
  });

  test('should handle fetch article details comments data service rejected', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
    };

    const action = fetchArticleDetailsComments.rejected(null, '', mockArticleId, 'error');

    expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, action))
      .toEqual({
        error: 'error',
        isLoading: false,
      });
  });
});
