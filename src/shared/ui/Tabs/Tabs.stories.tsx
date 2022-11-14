import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    tabs: [
      {
        value: '1',
        label: 'Tab 1',
      },
      {
        value: '2',
        label: 'Tab 2',
      },
      {
        value: '3',
        label: 'Tab 3',
      },
    ],
    value: '2',
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {};
DefaultLight.decorators = [ThemeDecorator(Theme.Light)];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const DefaultOrange = Template.bind({});
DefaultOrange.args = {};
DefaultOrange.decorators = [ThemeDecorator(Theme.Orange)];
