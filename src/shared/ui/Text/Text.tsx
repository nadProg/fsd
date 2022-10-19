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

type TextProps = PropsWithClassName & {
  theme?: ValuesOf<typeof TextTheme>;
  variant?: ValuesOf<typeof TextVariant>;
};

export const Text: FC<TextProps> = ({
  className,
  children,
  theme = TextTheme.Primary,
  variant = TextVariant.Text,
}) => <div className={classNames(className, styles.Text, styles[theme], styles[variant])}>{children}</div>;
