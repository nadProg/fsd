import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleTypeTab } from '../../model/types/article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: ArticleTypeTab.All,
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const LightAll = Template.bind({});
LightAll.args = {};
LightAll.decorators = [];

export const LightIt = Template.bind({});
LightIt.args = {
  value: ArticleTypeTab.It,
};
LightIt.decorators = [];

export const DarkAll = Template.bind({});
DarkAll.args = {};
DarkAll.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkIt = Template.bind({});
DarkIt.args = {
  value: ArticleTypeTab.It,
};
DarkIt.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeAll = Template.bind({});
OrangeAll.args = {};
OrangeAll.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeIt = Template.bind({});
OrangeIt.args = {
  value: ArticleTypeTab.It,
};
OrangeIt.decorators = [ThemeDecorator(Theme.Orange)];
