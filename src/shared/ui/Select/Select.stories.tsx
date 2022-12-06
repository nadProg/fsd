import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const label = 'Выберите значение';
const options = [
  {
    label: 'Опция 1',
    value: '1',
  },
  {
    label: 'Опция 2',
    value: '2',
  },
  {
    label: 'Опция 3',
    value: '3',
  },
];
const value = '2';

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  label,
  options,
  value,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  label,
  options,
  value,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
