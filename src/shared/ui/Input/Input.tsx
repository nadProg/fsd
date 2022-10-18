import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

type ExtendedInputProps = {
  value?: string;
  onChange?: (value: string) => void;
};

type OverrideInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type InputProps = ExtendedInputProps & OverrideInputProps;

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
      <input onChange={onInputChange} {...restProps} />
    </label>
  );
};
