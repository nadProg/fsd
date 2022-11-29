import classNames from 'classnames';

import {
  PropsWithChildren, PropsWithClassName, PropsWithDataAttributes, ValuesOf,
} from 'shared/types';

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

type TextProps = PropsWithClassName &
PropsWithChildren &
PropsWithDataAttributes & {
  theme?: ValuesOf<typeof TextTheme>;
  variant?: ValuesOf<typeof TextVariant>;
  size?: ValuesOf<typeof TextSize>;
};

export const Text = (props: TextProps) => {
  const {
    className,
    children,
    theme = TextTheme.Primary,
    variant = TextVariant.Text,
    size = TextSize.Medium,
    'data-testid': dataTestId,
    ...restProps
  } = props;

  const textDataTestId = `${dataTestId}.Text`;

  return (
    <div
      className={classNames(
        className,
        styles.Text,
        styles[theme],
        styles[variant],
        styles[size],
      )}
      data-testid={textDataTestId}
      {...restProps}
    >
      {children}
    </div>
  );
};
