import { useCallback, useRef } from 'react';
import { PropsWithClassName, PropsWithChildren } from 'shared/types';
import classNames from 'classnames';

import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';

import styles from './Code.module.scss';

type CodeProps = PropsWithClassName & PropsWithChildren;

export const Code = (props: CodeProps) => {
  const { className, children } = props;
  const codeRef = useRef<HTMLPreElement>(null);

  const onCopy = useCallback(() => {
    const textContent = codeRef.current?.textContent ?? '';
    navigator.clipboard.writeText(textContent);
  }, []);

  return (
    <div className={classNames(className, styles.Code)}>

      {/* todo: add aria-label or hidden description */}
      <Button
        theme={ButtonTheme.Clear}
        className={styles.copyButton}
        onClick={onCopy}
      >
        <Icon icon={CopyIcon} />
      </Button>

      <code>
        <pre ref={codeRef}>
          {children}
        </pre>
      </code>
    </div>
  );
};
