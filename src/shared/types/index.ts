export type ValuesOf<T> = T[keyof T];

export type PropsWithClassName = {
  className?: string;
};

export type ExtendableProps<
  ExtendedProps = Record<string, unknown>,
  OverrideProps = Record<string, unknown>,
  > = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
