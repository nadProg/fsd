import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleView } from '@/entities/Article/testing';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    view: ArticleView.List,
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const LightList = Template.bind({});
LightList.args = {};
LightList.decorators = [ThemeDecorator(Theme.Light)];

export const LightGrid = Template.bind({});
LightGrid.args = {
  view: ArticleView.Grid,
};
LightGrid.decorators = [ThemeDecorator(Theme.Light)];

export const DarkList = Template.bind({});
DarkList.args = {};
DarkList.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkGrid = Template.bind({});
DarkGrid.args = {
  view: ArticleView.Grid,
};
DarkGrid.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeList = Template.bind({});
OrangeList.args = {};
OrangeList.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeGrid = Template.bind({});
OrangeGrid.args = {
  view: ArticleView.Grid,
};
OrangeGrid.decorators = [ThemeDecorator(Theme.Orange)];
