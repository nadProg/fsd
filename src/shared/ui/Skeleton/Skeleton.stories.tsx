import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const LightSquare = Template.bind({});
LightSquare.args = {
  width: 100,
  height: 100,
};
LightSquare.decorators = [ThemeDecorator(Theme.Light)];

export const LightCircle = Template.bind({});
LightCircle.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};
LightCircle.decorators = [ThemeDecorator(Theme.Light)];

export const DarkSquare = Template.bind({});
DarkSquare.args = {
  width: 100,
  height: 100,
};
DarkSquare.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};
DarkCircle.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeSquare = Template.bind({});
OrangeSquare.args = {
  width: 100,
  height: 100,
};
OrangeSquare.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeCircle = Template.bind({});
OrangeCircle.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};
OrangeCircle.decorators = [ThemeDecorator(Theme.Orange)];
