import { memo } from 'react';
import classNames from 'classnames';

import type { PropsWithClassName, ValuesOf } from '@/shared/types';

import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';

import { ArticleView } from '@/entities/Article';

import { VIEWS } from '../../model/constants';
import styles from './ArticleViewSelector.module.scss';

type ArticleViewSelectorProps = PropsWithClassName & {
  view?: ValuesOf<typeof ArticleView>;
  onSelect: (view: ValuesOf<typeof ArticleView>) => void;
};

export const ArticleViewSelector = memo(({ className, view: currentView, onSelect }: ArticleViewSelectorProps) => (
  <div className={classNames(className, styles.ArticleViewSelector)}>
    {VIEWS.map(({ view, icon }) => (
      <Button
        key={view}
        className={classNames(styles.button, {
          [styles.active]: view === currentView,
        })}
        onClick={() => onSelect(view)}
      >
        <Icon icon={icon} className={styles.icon} />
      </Button>
    ))}
  </div>
));

ArticleViewSelector.displayName = 'ArticleViewSelector';
