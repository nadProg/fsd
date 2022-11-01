import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import { ArticleCodeBlock } from '../../model/types/article';

import styles from './ArticleCodeBlockComponent.module.scss';

type ArticleCodeBlockComponentProps = PropsWithClassName & {
  block: ArticleCodeBlock;
};

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(className, styles.ArticleCodeBlockComponent)}
    >
      {t('ArticleCodeBlockComponent')}
    </div>
  );
};
