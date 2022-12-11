import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MockAvatar from '@/shared/assets/test/images/avatar.png';
import { Theme } from '@/shared/providers/ThemeProvider';

import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetails } from './ArticleDetails';
import { Article, ArticleType } from '../../model/types/article';

const store: DeepPartial<StateSchema> = {};

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator(store)],
} as ComponentMeta<typeof ArticleDetails>;

const data: Article = {
  id: '1',
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  views: 100,
  createdAt: '22.10.2022',
  img: '', // todo: add mock image
  types: [ArticleType.It, ArticleType.Economics],
  blocks: [], // todo: add mock blocks,
  user: {
    id: '1',
    username: 'Username',
    avatar: MockAvatar,
    roles: [],
  },
};

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.Light), StoreDecorator({
  articleDetails: {
    data,
    isLoading: false,
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  articleDetails: {
    data,
    isLoading: false,
  },
})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.Orange), StoreDecorator({
  articleDetails: {
    data,
    isLoading: false,
  },
})];

export const LightLoading = Template.bind({});
LightLoading.args = {};
LightLoading.decorators = [ThemeDecorator(Theme.Light), StoreDecorator({
  articleDetails: {
    isLoading: true,
  },
})];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  articleDetails: {
    isLoading: true,
  },
})];

export const OrangeLoading = Template.bind({});
OrangeLoading.args = {};
OrangeLoading.decorators = [ThemeDecorator(Theme.Orange), StoreDecorator({
  articleDetails: {
    isLoading: true,
  },
})];

export const LightError = Template.bind({});
LightError.args = {};
LightError.decorators = [ThemeDecorator(Theme.Light), StoreDecorator({
  articleDetails: {
    error: 'error',
    isLoading: false,
  },
})];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  articleDetails: {
    error: 'error',
    isLoading: false,
  },
})];

export const OrangeError = Template.bind({});
OrangeError.args = {};
OrangeError.decorators = [ThemeDecorator(Theme.Orange), StoreDecorator({
  articleDetails: {
    error: 'error',
    isLoading: false,
  },
})];
