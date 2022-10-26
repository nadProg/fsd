import {
  ChangeEvent, FC, SelectHTMLAttributes, useCallback,
} from 'react';

import { PropsWithClassName, Option, ExtendableProps } from 'shared/types';

import classNames from 'classnames';
import styles from './Select.module.scss';

type OverrideProps = {
  label?: string;
  options?: Option[];
  value?: string;
  onChange?: (value: string) => void;
};

type ExtendedProps = SelectHTMLAttributes<HTMLSelectElement>;

export type SelectProps = PropsWithClassName & ExtendableProps<ExtendedProps, OverrideProps>;

export const Select: FC<SelectProps> = (props) => {
  const {
    className, label, options, onChange, ...restProps
  } = props;

  const onSelectChange = useCallback((evt: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(evt.target.value);
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
};
