import classNames from 'classnames';

import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { PropsWithClassName, ValuesOf } from '@/shared/types';

import { ArticleView } from '../../model/types/article';

import styles from './ArticleListItem.module.scss';

type ArticleListItemSkeletonProps = PropsWithClassName & {
  view: ValuesOf<typeof ArticleView>;
};

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.List) {
    return (
      <Card className={classNames(className, styles.list)}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={150} height={16} className={styles.username} />
          <Skeleton width={100} height={16} className={styles.date} />
        </div>

        <Skeleton width={250} height={25} className={styles.title} />

        <Skeleton width={150} height={16} className={styles.types} />

        <div className={styles.imageWrapper}>
          <Skeleton className={styles.image} />
        </div>

        <Skeleton height={150} />

        <div className={styles.footer}>
          <Skeleton
            width={150}
            height={38}
            className={styles.button}
          />
          <Skeleton width={100} height={16} className={styles.views} />
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={classNames(
        className,
        styles.grid,
      )}
    >
      <div className={styles.imageWrapper}>
        <Skeleton className={styles.image} />
      </div>
      <div className={styles.infoWrapper}>
        <Skeleton width={130} height={16} />
      </div>
      <Skeleton width={150} height={16} className={styles.title} />
    </Card>
  );
};
