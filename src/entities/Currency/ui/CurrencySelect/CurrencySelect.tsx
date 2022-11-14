import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ExtendableProps, Option, PropsWithClassName, ValuesOf,
} from 'shared/types';
import { Select, SelectProps } from 'shared/ui/Select';
import { Currency } from '../../model/types/types';

export type ValuesOfCurrency = ValuesOf<typeof Currency>;

type OverrideProps = {
  value?: ValuesOfCurrency;
  onChange?: (value: ValuesOfCurrency) => void;
};

type CurrencySelectProps = PropsWithClassName & ExtendableProps<SelectProps<ValuesOfCurrency>, OverrideProps>;

const options: Option<ValuesOfCurrency>[] = [
  {
    value: Currency.Rub,
    label: 'Рубль',
  },
  {
    value: Currency.Eur,
    label: 'Евро',
  },
  {
    value: Currency.Usd,
    label: 'Доллар',
  },
];

export const CurrencySelect: FC<CurrencySelectProps> = ({
  className,
  onChange,
  ...restProps
}) => {
  // todo: add translation to label
  const { t } = useTranslation();

  return (
    <Select
      className={className}
      label="Выберите валюту"
      options={options}
      onChange={onChange}
      {...restProps}
    />
  );
};
