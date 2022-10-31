import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import styles from './ArticleTextBlockComponent.module.scss';

type ArticleTextBlockComponentProps = PropsWithClassName;

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(className, styles.ArticleTextBlockComponent)}
    >
      {t('ArticleTextBlockComponent')}
    </div>
  );
};
