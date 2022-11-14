import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ExtendableProps, Option, PropsWithClassName, ValuesOf,
} from 'shared/types';
import { Select, SelectProps } from 'shared/ui/Select';

import { Country } from '../../model/types/types';

export type ValuesOfCountry = ValuesOf<typeof Country>;

type OverrideProps = {
  value?: ValuesOfCountry;
  onChange?: (value: ValuesOfCountry) => void;
};

type CountrySelectProps = PropsWithClassName & ExtendableProps<SelectProps<ValuesOfCountry>, OverrideProps>;

const options: Option<ValuesOfCountry>[] = [
  {
    value: Country.Armenia,
    label: 'Армения',
  },
  {
    value: Country.Belarus,
    label: 'Беларусь',
  },
  {
    value: Country.Kazakhstan,
    label: 'Казахстан',
  },
  {
    value: Country.Russia,
    label: 'Россия',
  },
  {
    value: Country.Ukraine,
    label: 'Украина',
  },
  {
    value: Country.Mongolia,
    label: 'Монголия',
  },
];

export const CountrySelect: FC<CountrySelectProps> = ({
  className,
  onChange,
  ...restProps
}) => {
  // todo: add translation to label
  const { t } = useTranslation();

  return (
    <Select
      className={className}
      label="Выберите страну"
      options={options}
      onChange={onChange}
      {...restProps}
    />
  );
};
