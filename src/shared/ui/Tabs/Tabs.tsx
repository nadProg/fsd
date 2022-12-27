import classNames from 'classnames';
import { MouseEventHandler, ReactNode } from 'react';

import { Card, CardTheme } from '@/shared/ui/Card';
import type { PropsWithClassName } from '@/shared/types';

import styles from './Tabs.module.scss';

export type Tab<V extends string, L extends ReactNode> = {
  value: V;
  label: L;
};

type TabProps<V extends string, L extends ReactNode> = PropsWithClassName & {
  tabs: Tab<V, L>[];
  value: V;
  onTabClick: (newTab: V) => void;
  onClick?: MouseEventHandler;
};

export const Tabs = <V extends string, L extends ReactNode>(props: TabProps<V, L>) => {
  const { tabs, className, value, onTabClick, onClick } = props;

  const clickHandle =
    (newTab: V): MouseEventHandler =>
    (evt) => {
      if (value !== newTab) {
        onTabClick(newTab);
      }
      onClick?.(evt);
    };

  return (
    <div className={classNames(className, styles.Tabs)}>
      {tabs.map((tab) => (
        <Card
          className={classNames(styles.tab, {
            [styles.active]: value === tab.value,
          })}
          key={tab.value}
          theme={value === tab.value ? CardTheme.Contained : CardTheme.Outlined}
          onClick={clickHandle(tab.value)}
        >
          {tab.label}
        </Card>
      ))}
    </div>
  );
};
