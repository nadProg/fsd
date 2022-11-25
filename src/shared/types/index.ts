import { ReactNode } from 'react';

export type ValuesOf<T> = T[keyof T];

export type ValuesOfArray<T extends Record<number, unknown>> = T[number];

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

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Callback = (...args: any[]) => any;

export type ExtendableProps<
  ExtendedProps = Record<string, unknown>,
  OverrideProps = Record<string, unknown>,
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DeepPartial<T> = T extends any[] ? T : T extends Record<string, any> ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type Id = string;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;
