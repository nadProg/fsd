import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleEditPage } from './ArticleEditPage';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.decorators = [StoreDecorator({}), ThemeDecorator(Theme.Orange)];
