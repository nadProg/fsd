import { rtkApi } from '@/shared/api/rtkApi';
import type { Id } from '@/shared/types';
import type { Rating, RatingCardData } from '@/entities/Rating';

type GetArticleArgs = { userId: Id; articleId: Id };

type RateArticleArgs = GetArticleArgs & RatingCardData;

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRatings: build.query<Rating[], GetArticleArgs>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'ArticleRating' as const,
                id,
              })),
              'ArticleRating',
            ]
          : ['ArticleRating'],
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ArticleRating'],
    }),
  }),
  overrideExisting: false,
});

export const useArticleRatings = articleRatingApi.useGetArticleRatingsQuery;

export const useRateArticle = articleRatingApi.useRateArticleMutation;
