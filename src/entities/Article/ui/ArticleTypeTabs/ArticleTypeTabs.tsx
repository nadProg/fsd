import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from 'shared/ui/Tabs';
import { PropsWithClassName } from 'shared/types';

import { ArticleTypeTab, ValuesOfArticleTypeTab } from '../../model/types/article';

type ArticleTypeTabsProps = PropsWithClassName & {
  value: ValuesOfArticleTypeTab;
  onTabClick: (newTab: ValuesOfArticleTypeTab) => void;
};

export const ArticleTypeTabs = ({ className, value, onTabClick }: ArticleTypeTabsProps): JSX.Element => {
  const { t } = useTranslation();

  // todo: add translations
  const tabs = useMemo<Tab<ValuesOfArticleTypeTab, string>[]>(() => (
    [
      {
        value: ArticleTypeTab.All,
        label: 'All',
      },
      {
        value: ArticleTypeTab.It,
        label: 'IT',
      },
      {
        value: ArticleTypeTab.Economics,
        label: 'Economics',
      },
      {
        value: ArticleTypeTab.Science,
        label: 'Science',
      },
    ]
  ), [t]);

  return (
    <Tabs
      className={className}
      tabs={tabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
};
