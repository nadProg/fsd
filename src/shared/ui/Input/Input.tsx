import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import { ExtendableProps } from 'shared/types';
import styles from './Input.module.scss';

type ExtendedInputProps = InputHTMLAttributes<HTMLInputElement>;

type OverrideInputProps = {
  value?: string | number;
  onChange?: (value: string) => void;
};

type InputProps = ExtendableProps<ExtendedInputProps, OverrideInputProps>;

export const Input: FC<InputProps> = ({
  className,
  onChange,
  placeholder,
  ...restProps
}) => {
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange?.(evt.target.value);

  return (
    <label className={classNames(className, styles.Input)}>
      {placeholder && (
        <span className={styles.placeholder}>
          {placeholder}
          {'>'}
        </span>
      )}
      <input
        onChange={onInputChange}
        className={styles.input}
        {...restProps}
      />
    </label>
  );
};
