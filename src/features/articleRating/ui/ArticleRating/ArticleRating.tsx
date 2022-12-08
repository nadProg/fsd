import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import type { Id, PropsWithClassName } from '@/shared/types';

import { RatingCard } from '@/entities/Rating';

import styles from './ArticleRating.module.scss';

type ArticleRatingProps = PropsWithClassName & {
  articleId: Id
};

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const title = t('article-rating.title');

  return (
    <RatingCard className={classNames(className, styles.ArticleRating)} title={title} />
  );
});

ArticleRating.displayName = 'ArticleRating';
