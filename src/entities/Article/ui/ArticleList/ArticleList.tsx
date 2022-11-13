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

const getSkeletons = (count: number, view: ValuesOf<typeof ArticleView>) => new Array(count).fill(null)
  /* eslint-disable-next-line react/no-array-index-key */
  .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { t } = useTranslation();
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.Grid,
  } = props;

  const isEmpty = !articles?.length;

  if (isEmpty && !isLoading) {
    return (
      <div className={classNames(className, styles.ArticleList, styles.empty)}>
        {t('articles.list.empty')}
      </div>
    );
  }

  const skeletonsCount = view === ArticleView.Grid ? 9 : 3;

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
      {isLoading && getSkeletons(skeletonsCount, view)}
    </div>
  );
};
