import { useSelector } from 'react-redux';

import { ArticleList } from 'entities/Article';

import { getArticles } from '../../model/slices/articlePageSlice/articlesPageSlice';
import {
  getArticlesPageIsLoading,
} from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';

export const ArticlesInfiniteList = () => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
    />
  );
};
