import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Article } from '@/entities/Article';
import { ArticleType } from '@/entities/Article/model/types/article';
import MockAvatar from '@/shared/assets/test/images/avatar.png';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const limit = 3;

const mockItem: Article = {
  id: '1',
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  views: 100,
  createdAt: '22.10.2022',
  img: MockAvatar, // todo: add mock image
  types: [ArticleType.It, ArticleType.Economics],
  blocks: [], // todo: add mock blocks,
  user: {
    id: '1',
    username: 'Username',
    avatar: MockAvatar,
    roles: [],
  },
};

const mockResponse = new Array(3).fill(null).map((_, index) => ({
  ...mockItem,
  id: String(index + 1),
}));

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/articles?_limit=${limit}`,
        method: 'GET',
        status: 200,
        response: mockResponse,
      },
    ],
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
