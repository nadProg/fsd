import { rtkApi } from '@/shared/api/rtkApi';
import type { Id } from '@/shared/types';
import type { Rating } from '@/entities/Rating';

type GetArticleArgs = { userId: Id, articleId: Id };

type RateArticleArgs = GetArticleArgs & {
  rate: number;
  feedback?: string;
};

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
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const useArticleRatings = articleRatingApi.useGetArticleRatingsQuery;

export const useRateArticle = articleRatingApi.useRateArticleMutation;
