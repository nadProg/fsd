import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { Country } from '../../model/types/types';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

const value = Country.Mongolia;

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
DarkEmpty.args = {};
DarkEmpty.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {
  value,
};
Orange.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeEmpty = Template.bind({});
OrangeEmpty.args = {};
OrangeEmpty.decorators = [ThemeDecorator(Theme.Orange)];
