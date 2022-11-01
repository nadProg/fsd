import { FC } from 'react';
import classNames from 'classnames';

import { PropsWithClassName, ValuesOf } from 'shared/types';

import styles from './Text.module.scss';

export const TextTheme = {
  Primary: 'primary',
  Error: 'error',
} as const;

export const TextVariant = {
  Title: 'title',
  Text: 'text',
} as const;

export const TextSize = {
  Medium: 'mediumSize',
  Large: 'largeSize',
};

type TextProps = PropsWithClassName & {
  theme?: ValuesOf<typeof TextTheme>;
  variant?: ValuesOf<typeof TextVariant>;
  size?: ValuesOf<typeof TextSize>;
};

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    children,
    theme = TextTheme.Primary,
    variant = TextVariant.Text,
    size = TextSize.Medium,
  } = props;

  return (
    <div className={classNames(
      className,
      styles.Text,
      styles[theme],
      styles[variant],
      styles[size],
    )}
    >
      {children}
    </div>
  );
};
