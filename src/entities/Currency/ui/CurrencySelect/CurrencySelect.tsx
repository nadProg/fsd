import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ExtendableProps, PropsWithClassName, ValuesOf,
} from 'shared/types';

import { ListBox, ListBoxProps } from 'shared/ui/ListBox';
import { Currency } from '../../model/types/types';

export type ValuesOfCurrency = ValuesOf<typeof Currency>;

type OverrideProps = {
  value?: ValuesOfCurrency;
  onChange?: (value: ValuesOfCurrency) => void;
};

type CurrencyListBoxProps = ListBoxProps<ValuesOfCurrency>;

type CurrencySelectProps = PropsWithClassName & ExtendableProps<CurrencyListBoxProps, OverrideProps>;

const items: CurrencyListBoxProps['items'] = [
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

export const CurrencySelect = memo(({
  className,
  onChange,
  ...restProps
}: CurrencySelectProps): JSX.Element => {
  // todo: add translation to label
  const { t } = useTranslation();

  return (
    <ListBox
      className={className}
      label="Выберите валюту"
      items={items}
      onChange={onChange}
      {...restProps}
    />
  );
});

CurrencySelect.displayName = 'CurrencySelect';
