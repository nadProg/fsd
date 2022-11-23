import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { ListBox } from './ListBox';

const label = 'Выберите значение';
const placeholder = 'Выберите значение';
const items = [
  {
    id: 1,
    value: 'Durward Reynolds',
    label: 'Durward Reynolds',
  },
  {
    id: 2,
    value: 'Kenton Towne',
    label: 'Kenton Towne',
  },
  {
    id: 3,
    value: 'Therese Wunsch',
    label: 'Therese Wunsch',
  },
  {
    id: 4,
    value: 'Benedict Kessler',
    label: 'Benedict Kessler',
    disabled: true,
  },
  {
    id: 5,
    value: 'Katelyn Rohan',
    label: 'Katelyn Rohan',
  },
];

const value = 'Kenton Towne';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label,
    items,
    placeholder,
    value,
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const LightEmpty = Template.bind({});
LightEmpty.args = {
  value: undefined,
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkEmpty = Template.bind({});
DarkEmpty.args = {
  value: undefined,
};
DarkEmpty.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeEmpty = Template.bind({});
OrangeEmpty.args = {
  value: undefined,
};
OrangeEmpty.decorators = [ThemeDecorator(Theme.Orange)];
