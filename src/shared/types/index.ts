export type ValuesOf<T> = T[keyof T];

export type PropsWithClassName = {
  className?: string;
};

export type ExtendableProps<
  ExtendedProps = Record<string, unknown>,
  OverrideProps = Record<string, unknown>,
  > = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type DeepPartial<T> = T extends any[] ? T : T extends Record<string, any> ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
