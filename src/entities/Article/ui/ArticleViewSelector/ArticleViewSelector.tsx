import classNames from 'classnames';

import { PropsWithClassName, ValuesOf } from 'shared/types';
import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';

import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

import { memo } from 'react';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleViewSelector.module.scss';

type ArticleViewSelectorProps = PropsWithClassName & {
  view?: ValuesOf<typeof ArticleView>;
  onSelect: (view: ValuesOf<typeof ArticleView>) => void;
};

const VIEWS = [
  {
    view: ArticleView.Grid,
    icon: GridIcon,
  },
  {
    view: ArticleView.List,
    icon: ListIcon,
  },
] as const;

export const ArticleViewSelector = memo(({
  className,
  view: currentView,
  onSelect,
}: ArticleViewSelectorProps) => (
  <div className={classNames(className, styles.ArticleViewSelector)}>
    {VIEWS.map(({
      view,
      icon,
    }) => (
      <Button
        key={view}
        className={classNames(styles.button, { [styles.active]: view === currentView })}
        onClick={() => onSelect(view)}
      >
        <Icon icon={icon} className={styles.icon} />
      </Button>
    ))}
  </div>
));

ArticleViewSelector.displayName = 'ArticleViewSelector';
