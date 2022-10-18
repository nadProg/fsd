import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import { ValuesOf } from 'shared/types';

import styles from './Button.module.scss';

export const ButtonTheme = {
  Clear: 'clear',
  Outlined: 'outlined',
  Background: 'background',
  BackgroundInverted: 'backgroundInverted',
} as const;

export const ButtonSize = {
  Medium: 'mediumSize',
  Large: 'largeSize',
  XLarge: 'xLargeSize',
} as const;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  theme?: ValuesOf<typeof ButtonTheme>;
  square?: boolean;
  size?: ValuesOf<typeof ButtonSize>
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.Clear,
  square,
  size = ButtonSize.Medium,
  ...restProps
}) => {
  const buttonClassName = classNames(
    className,
    styles.Button,
    styles[theme],
    styles[size],
    {
      [styles.square]: square,
    },
  );

  return (
    <button
      type="button"
      className={buttonClassName}
      {...restProps}
    >
      {children}
    </button>
  );
};
