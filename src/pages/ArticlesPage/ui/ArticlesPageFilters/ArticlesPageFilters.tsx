import classNames from 'classnames';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { PropsWithClassName, ValuesOf } from 'shared/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input';
import { SortOrder } from 'shared/constants/queryParams';

import {
  ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/Article';

import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { articlesPageActions } from '../../model/slices/articlePageSlice/articlesPageSlice';

import styles from './ArticlesPageFilters.module.scss';

type ArticlesPageFiltersProps = PropsWithClassName;

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className } = props;

  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);

  const dispatch = useAppDispatch();

  const onViewSelect = useCallback((newView: ValuesOf<typeof ArticleView>) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onOrderSelect = useCallback((newView: ValuesOf<typeof SortOrder>) => {
    dispatch(articlesPageActions.setOrder(newView));
  }, [dispatch]);

  const onSortSelect = useCallback((newView: ValuesOf<typeof ArticleSortField>) => {
    dispatch(articlesPageActions.setSort(newView));
  }, [dispatch]);

  return (
    <div className={classNames(className, styles.ArticlesPageFilters)}>
      <div className={styles.filters}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onSortSelect={onSortSelect}
          onOrderSelect={onOrderSelect}
        />
        <ArticleViewSelector
          className={styles.viewSelector}
          view={view}
          onSelect={onViewSelect}
        />
      </div>
      <Card>
        <Input placeholder="Поиск" />
      </Card>
    </div>
  );
};
