import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import styles from './ArticleCodeBlockComponent.module.scss';

type ArticleCodeBlockComponentProps = PropsWithClassName;

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(className, styles.ArticleCodeBlockComponent)}
    >
      {t('ArticleCodeBlockComponent')}
    </div>
  );
};
