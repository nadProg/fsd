import {
  ChangeEvent, memo, SelectHTMLAttributes, useCallback,
} from 'react';

import { PropsWithClassName, Option, ExtendableProps } from 'shared/types';

import classNames from 'classnames';
import styles from './Select.module.scss';

type OverrideProps<V extends string> = {
  label?: string;
  options?: Option<V>[];
  value?: V;
  onChange?: (value: V) => void;
};

type ExtendedProps = SelectHTMLAttributes<HTMLSelectElement>;

export type SelectProps<V extends string = string> =
  PropsWithClassName
  & ExtendableProps<ExtendedProps, OverrideProps<V>>;

type SelectComponent = (<V extends string>(props: SelectProps<V>) => JSX.Element) & {
  displayName: string;
};

export const Select = memo(<V extends string>(props: SelectProps<V>): JSX.Element => {
  const {
    className,
    label,
    options,
    onChange,
    ...restProps
  } = props;

  const onSelectChange = useCallback((evt: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(evt.target.value as V);
  }, [onChange]);

  return (
    <div className={classNames(className, styles.Select)}>
      {label && (
        <span>
          {label}
          {'>'}
        </span>
      )}

      <select className={styles.select} onChange={onSelectChange} {...restProps}>
        {options?.map((item) => (
          <option
            key={item.value}
            className={styles.option}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}) as SelectComponent;

Select.displayName = 'Select';
