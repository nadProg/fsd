import { FC } from 'react';
import classNames from 'classnames';

import { PropsWithClassName, ValuesOf } from 'shared/types';

import { useTranslation } from 'react-i18next';
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

  if (!articles?.length) {
    return (
      <div className={classNames(className, styles.ArticleList)}>
        {t('articles.list.empty')}
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.ArticleList)}>
      {articles?.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
          view={view}
        />
      ))}
    </div>
  );
};
