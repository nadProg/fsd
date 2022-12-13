import { memo, useMemo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Select } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/constants/queryParams';
import { Option, PropsWithClassName, ValuesOf } from '@/shared/types';

import { ArticleSortField } from '../../model/constants';

import styles from './ArticleSortSelector.module.scss';

type ValuesOfArticleSortField = ValuesOf<typeof ArticleSortField>;
type ValuesOfSortOrder = ValuesOf<typeof SortOrder>;

type ArticleViewSelectorProps = PropsWithClassName & {
  sort: ValuesOfArticleSortField;
  order: ValuesOf<typeof SortOrder>;
  onSortSelect: (value: ValuesOfArticleSortField) => void;
  onOrderSelect: (value: ValuesOfSortOrder) => void;
};

export const ArticleSortSelector = memo(({
  className,
  sort,
  order,
  onOrderSelect,
  onSortSelect,
}: ArticleViewSelectorProps) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<Option<ValuesOfSortOrder>[]>(() => ([
    {
      value: SortOrder.Asc,
      label: t('sort-order.asc'),
    },
    {
      value: SortOrder.Desc,
      label: t('sort-order.desc'),
    },
  ]), [t]);

  const sortOptions = useMemo<Option<ValuesOfArticleSortField>[]>(() => ([
    {
      value: ArticleSortField.Views,
      label: t('article-sort-field.views'),
    },
    {
      value: ArticleSortField.Title,
      label: t('article-sort-field.title'),
    },
    {
      value: ArticleSortField.CreatedAt,
      label: t('article-sort-field.created-at'),
    },
  ]), [t]);

  return (
    <div className={classNames(className, styles.ArticleSortSelector)}>
      <Select
        label="Поле"
        options={sortOptions}
        value={sort}
        onChange={onSortSelect}
      />
      <Select
        label="Направление"
        options={orderOptions}
        value={order}
        onChange={onOrderSelect}
      />
    </div>
  );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
