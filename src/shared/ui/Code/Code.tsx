import { PropsWithClassName, PropsWithChildren } from 'shared/types';
import classNames from 'classnames';

import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './Code.module.scss';

type CodeProps = PropsWithClassName & PropsWithChildren;

export const Code = (props: CodeProps) => {
  const { className, children } = props;

  return (
    <div className={classNames(className, styles.Code)}>

      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button theme={ButtonTheme.Outlined} className={styles.copyButton}>Copy</Button>

      <code>
        <pre>
          {children}
        </pre>
      </code>
    </div>
  );
};
