import { rtkApi } from 'shared/api/rtkApi';

const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit: number) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const useArticleRecommendationsList = articleRecommendationsApi.useGetArticleRecommendationsListQuery;
