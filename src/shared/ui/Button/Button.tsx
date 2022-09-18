import { dirxml } from 'console';
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ValuesOf } from 'shared/types';

import styles from './Button.module.scss';

export const ButtonTheme = {
  Clear: 'clear',
} as const;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  theme: ValuesOf<typeof ButtonTheme>;
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...restProps
}) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
