import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';

import { Currency } from '../../model/types/types';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/Currency/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

const value = Currency.Eur;

export const Light = Template.bind({});
Light.args = {
  value,
};

export const LightEmpty = Template.bind({});
LightEmpty.args = {};

export const Dark = Template.bind({});
Dark.args = {
  value,
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkEmpty = Template.bind({});
DarkEmpty.args = {
  value,
};
DarkEmpty.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {
  value,
};
Orange.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeEmpty = Template.bind({});
OrangeEmpty.args = {};
OrangeEmpty.decorators = [ThemeDecorator(Theme.Orange)];
