import { FC } from 'react';
import classNames from 'classnames';

import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import { PropsWithClassName, ValuesOf } from 'shared/types';

import EyeIcon from 'shared/assets/icons/eye.svg';

import { Article, ArticleView } from '../../model/types/article';

import styles from './ArticleListItem.module.scss';

type ArticleListItemProps = PropsWithClassName & {
  article: Article;
  view: ValuesOf<typeof ArticleView>;
};

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view } = props;

  if (view === ArticleView.List) {
    return (
      <div className={classNames(className, styles.ArticleListItem, styles.list)}>
        {article.title}
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.ArticleListItem, styles.grid)}>
      <div className={styles.imageWrapper}>
        <img src={article.img} alt="" className={styles.image} />
        <Text className={styles.date}>{article.createdAt}</Text>
      </div>
      <div className={styles.infoWrapper}>
        <Text className={styles.types}>{article.types.join(' ')}</Text>
        <Text className={styles.views}>{article.views}</Text>
        <Icon icon={EyeIcon} />
      </div>
      <Text className={styles.title}>
        {article.title}
      </Text>
    </div>
  );
};
