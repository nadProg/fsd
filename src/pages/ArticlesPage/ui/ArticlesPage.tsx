import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Page } from 'shared/ui/Page';
import { ValuesOf } from 'shared/types';
import { useMountEffect } from 'shared/hooks/useMountEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useProjectEffect } from 'shared/hooks/useProjectEffect';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';

import {
  articlesPageReducer, getArticles, articlesPageActions,
} from '../model/slices/articlePageSlice/articlesPageSlice';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { getArticlesPageView } from '../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPagePage } from '../model/selectors/getArticlesPagePage/getArticlesPagePage';
import { getArticlesPageError } from '../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticlesPageHasMore } from '../model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { getArticlesPageIsLoading } from '../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';

import styles from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

export const ArticlesPage = () => {
  useDynamicReducers(reducers);

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const page = useSelector(getArticlesPagePage);
  const view = useSelector(getArticlesPageView);
  const hasMore = useSelector(getArticlesPageHasMore);
  const error = useSelector(getArticlesPageError);

  const dispatch = useAppDispatch();

  useMountEffect(() => {
    dispatch(articlesPageActions.initState());
  });

  useProjectEffect(() => {
    dispatch(fetchArticles({
      page,
    }));
  }, [dispatch]);

  const onViewSelect = useCallback((newView: ValuesOf<typeof ArticleView>) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onPageScrollEnd = useCallback(() => {
    (async () => {
      if (hasMore && !isLoading) {
        const nextPage = page + 1;

        await dispatch(fetchArticles({
          page: nextPage,
        }));

        dispatch(articlesPageActions.setPage(nextPage));
      }
    })();
  }, [dispatch, page, isLoading, hasMore]);

  const { t } = useTranslation();

  return (
    <Page onScrollEnd={onPageScrollEnd}>
      <h1>{t('articles.title')}</h1>
      <p>{t('articles.content')}</p>

      <ArticleViewSelector
        className={styles.viewSelector}
        view={view}
        onSelect={onViewSelect}
      />

      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
      />
    </Page>
  );
};
