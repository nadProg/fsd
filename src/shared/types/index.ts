import { ReactNode } from 'react';

export type ValuesOf<T> = T[keyof T];

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithChildren = {
  children: ReactNode;
};

export type Option<V = string, L = string> = {
  label: L;
  value: V
};

export type ExtendableProps<
  ExtendedProps = Record<string, unknown>,
  OverrideProps = Record<string, unknown>,
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DeepPartial<T> = T extends any[] ? T : T extends Record<string, any> ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
