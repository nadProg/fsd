import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { Text, TextVariant } from 'shared/ui/Text';

import { Card, CardTheme } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: (
      <>
        <Text variant={TextVariant.Title}>Title</Text>
        <Text variant={TextVariant.Text}>Text</Text>
      </>
    ),
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.Light)];

export const LightOutlined = Template.bind({});
LightOutlined.args = {
  theme: CardTheme.Outlined,
};
LightOutlined.decorators = [ThemeDecorator(Theme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkOutlined = Template.bind({});
DarkOutlined.args = {
  theme: CardTheme.Outlined,
};
DarkOutlined.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeOutlined = Template.bind({});
OrangeOutlined.args = {
  theme: CardTheme.Outlined,
};
OrangeOutlined.decorators = [ThemeDecorator(Theme.Orange)];
