import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ExtendableProps, PropsWithClassName, ValuesOf,
} from '@/shared/types';
import { ListBox, ListBoxProps } from '@/shared/ui/ListBox';

import { Country } from '../../model/types/types';

export type ValuesOfCountry = ValuesOf<typeof Country>;

type OverrideProps = {
  value?: ValuesOfCountry;
  onChange?: (value: ValuesOfCountry) => void;
};

type CountryListBoxProps = ListBoxProps<ValuesOfCountry>;

type CountrySelectProps = PropsWithClassName & ExtendableProps<CountryListBoxProps, OverrideProps>;

const items: CountryListBoxProps['items'] = [
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

export const CountrySelect = memo(({
  className,
  onChange,
  ...restProps
}: CountrySelectProps): JSX.Element => {
  // todo: add translation to label
  const { t } = useTranslation();

  return (
    <ListBox
      className={className}
      label="Выберите страну"
      items={items}
      onChange={onChange}
      {...restProps}
    />
  );
});

CountrySelect.displayName = 'CountrySelect';
