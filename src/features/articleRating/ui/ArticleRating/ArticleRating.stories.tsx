import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Rating } from '@/entities/Rating';

import { ArticleRating } from './ArticleRating';

const mockArticleId = '1';

const mockUserAuthData = {
  id: '1',
  username: 'UserName',
  roles: [],
};

const mockEmptyResponse: Rating[] = [];

const mockResponse: Rating[] = [
  {
    id: '5',
    rate: 4,
    feedback: 'Feedback',
  },
];

const mockEmptyData = {
  url: `${__API_URL__}/article-ratings?userId=${mockUserAuthData.id}&articleId=${mockArticleId}`,
  method: 'GET',
  status: 200,
  response: mockEmptyResponse,
};
const mockData = {
  ...mockEmptyData,
  response: mockResponse,
};

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({
    user: {
      authData: mockUserAuthData,
    },
  })],
  args: {
    articleId: mockArticleId,
  },
  parameters: {
    mockData: [
      mockEmptyData,
    ],
  },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const LightWithFeedBack = Template.bind({});
LightWithFeedBack.args = {};
LightWithFeedBack.parameters = {
  mockData: [
    mockData,
  ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkWithFeedBack = Template.bind({});
DarkWithFeedBack.args = {};
DarkWithFeedBack.decorators = [ThemeDecorator(Theme.Dark)];
DarkWithFeedBack.parameters = {
  mockData: [
    mockData,
  ],
};

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.Orange)];

export const OrangeWithFeedBack = Template.bind({});
OrangeWithFeedBack.args = {};
OrangeWithFeedBack.decorators = [ThemeDecorator(Theme.Orange)];
OrangeWithFeedBack.parameters = {
  mockData: [
    mockData,
  ],
};
