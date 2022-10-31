import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import styles from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = PropsWithClassName;

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(className, styles.ArticleImageBlockComponent)}
    >
      {t('ArticleImageBlockComponent')}
    </div>
  );
};
