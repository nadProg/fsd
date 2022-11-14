import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticlesPage } from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
