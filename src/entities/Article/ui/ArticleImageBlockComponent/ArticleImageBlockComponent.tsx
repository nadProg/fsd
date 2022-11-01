import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import { ArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = PropsWithClassName & {
  block: ArticleImageBlock;
};

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(className, styles.ArticleImageBlockComponent)}
    >
      {t('ArticleImageBlockComponent')}
    </div>
  );
};
