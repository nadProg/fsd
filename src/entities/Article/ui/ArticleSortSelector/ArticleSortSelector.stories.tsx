import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'entities/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const LightList = Template.bind({});
LightList.args = {};
LightList.decorators = [ThemeDecorator(Theme.Light)];

export const LightGrid = Template.bind({});
LightGrid.args = {};
LightGrid.decorators = [ThemeDecorator(Theme.Light)];

export const DarkList = Template.bind({});
DarkList.args = {};
DarkList.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkGrid = Template.bind({});
DarkGrid.args = {};
DarkGrid.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeList = Template.bind({});
OrangeList.args = {};
OrangeList.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeGrid = Template.bind({});
OrangeGrid.args = {};
OrangeGrid.decorators = [ThemeDecorator(Theme.Orange)];
