import { FC } from 'react';
import classNames from 'classnames';

import { PropsWithClassName, ValuesOf } from 'shared/types';

import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';

import styles from './ArticleList.module.scss';

type ArticleListProps = PropsWithClassName & {
  articles: Article[];
  isLoading: boolean;
  view?: ValuesOf<typeof ArticleView>;
};

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { t } = useTranslation();
  const {
    className, isLoading, articles, view = ArticleView.Grid,
  } = props;

  if (isLoading) {
    const skeletonsCount = view === ArticleView.Grid ? 9 : 3;

    return (
      <div className={classNames(className, styles.ArticleList, styles.loading, styles[view])}>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {new Array(skeletonsCount).fill(null).map((_, index) => <ArticleListItemSkeleton key={index} view={view} />)}
      </div>
    );
  }

  if (!articles?.length) {
    return (
      <div className={classNames(className, styles.ArticleList, styles.empty)}>
        {t('articles.list.empty')}
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.ArticleList, styles[view])}>
      {articles?.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
          view={view}
          className={styles.card}
        />
      ))}
    </div>
  );
};
