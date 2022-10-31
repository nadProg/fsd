import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import styles from './ArticleDetails.module.scss';

type ArticleDetailsProps = PropsWithClassName;

export const ArticleDetails = ({ className }: ArticleDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(className, styles.ArticleDetails)}
    >
      {t('ArticleTextBlockComponent')}
    </div>
  );
};
