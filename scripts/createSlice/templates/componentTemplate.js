module.exports = (componentName) => {
  const componentProps = `${componentName}Props`;

  return `import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from '@/shared/types';

import styles from './${componentName}.module.scss';

type ${componentProps} = PropsWithClassName;

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(className, styles.${componentName})}>
      {t('')}
    </div>
  );
});

${componentName}.displayName = '${componentName}';
`;
};
