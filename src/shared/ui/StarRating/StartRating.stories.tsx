import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';

import { StarRating } from './StarRating';

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const LightMax10 = Template.bind({});
LightMax10.args = {
  maxRating: 10,
};

export const LightSelected = Template.bind({});
LightSelected.args = {
  selectedStar: 3,
};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkMax10 = Template.bind({});
DarkMax10.args = {
  maxRating: 10,
};
DarkMax10.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkSelected = Template.bind({});
DarkSelected.args = {
  selectedStar: 3,
};
DarkSelected.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeMax10 = Template.bind({});
OrangeMax10.args = {
  maxRating: 10,
};
OrangeMax10.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeSelected = Template.bind({});
OrangeSelected.args = {
  selectedStar: 3,
};
OrangeSelected.decorators = [ThemeDecorator(Theme.Orange)];
