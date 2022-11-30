import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { Button } from 'shared/ui/Button';
import { DropDownItemType } from './DropDown.types';
import { DropDown } from './DropDown';

const trigger = <Button theme="backgroundInverted">Menu</Button>;
const label = 'Выберите значение';
const placeholder = 'Выберите значение';
const items = [
  {
    type: DropDownItemType.Button,
    value: 'Durward Reynolds',
    label: 'Durward Reynolds',
  },
  {
    type: DropDownItemType.Button,
    value: 'Kenton Towne',
    label: 'Kenton Towne',
  },
  {
    type: DropDownItemType.Button,
    value: 'Therese Wunsch',
    label: 'Therese Wunsch',
  },
  {
    type: DropDownItemType.Button,
    value: 'Benedict Kessler',
    label: 'Benedict Kessler',
    disabled: true,
  },
  {
    type: DropDownItemType.Button,
    value: 'Katelyn Rohan',
    label: 'Katelyn Rohan',
  },
];

const value = 'Kenton Towne';
const disabled = true;

export default {
  title: 'shared/DropDown',
  component: DropDown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    trigger,
    label,
    items,
    placeholder,
    value,
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Light = Template.bind({});
Light.args = {};
//
// export const LightDisabled = Template.bind({});
// LightDisabled.args = {
//   disabled,
// };
//
// export const LightEmpty = Template.bind({});
// LightEmpty.args = {
//   value: undefined,
// };

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

// export const DarkDisabled = Template.bind({});
// DarkDisabled.args = {
//   disabled,
// };
// DarkDisabled.decorators = [ThemeDecorator(Theme.Dark)];
//
// export const DarkEmpty = Template.bind({});
// DarkEmpty.args = {
//   value: undefined,
// };
// DarkEmpty.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.Orange)];
//
// export const OrangeDisabled = Template.bind({});
// OrangeDisabled.args = {
//   disabled,
// };
// OrangeDisabled.decorators = [ThemeDecorator(Theme.Orange)];
//
// export const OrangeEmpty = Template.bind({});
// OrangeEmpty.args = {
//   value: undefined,
// };
// OrangeEmpty.decorators = [ThemeDecorator(Theme.Orange)];
