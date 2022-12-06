import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/providers/ThemeProvider';
import mockAvatar from '@/shared/assets/test/images/avatar.png';

import { Comment } from '../../model/types/comment';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const comments: Comment[] = [
  {
    id: '1',
    text: 'Comment 1',
    user: {
      id: '1',
      username: 'User 1',
    },
  },
  {
    id: '2',
    text: 'Comment 2',
    user: {
      id: '2',
      username: 'User 2',
      avatar: mockAvatar,
    },
  },
  {
    id: '3',
    text: 'Comment 3',
    user: {
      id: '2',
      username: 'User 2',
      avatar: mockAvatar,
    },
  },
  {
    id: '4',
    text: 'Comment 4',
    user: {
      id: '3',
      username: 'User 3',
    },
  },
];

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const NormalLight = Template.bind({});
NormalLight.args = { comments };
NormalLight.decorators = [];

export const NormalDark = Template.bind({});
NormalDark.args = { comments };
NormalDark.decorators = [ThemeDecorator(Theme.Dark)];

export const NormalOrange = Template.bind({});
NormalOrange.args = { comments };
NormalOrange.decorators = [ThemeDecorator(Theme.Orange)];

export const LightLoading = Template.bind({});
LightLoading.args = {
  isLoading: true,
};
LightLoading.decorators = [];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
  isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeLoading = Template.bind({});
OrangeLoading.args = {
  isLoading: true,
};
OrangeLoading.decorators = [ThemeDecorator(Theme.Orange)];

export const LightError = Template.bind({});
LightError.args = {
  error: 'Error',
};
LightError.decorators = [];

export const DarkError = Template.bind({});
DarkError.args = {
  error: 'Error',
};
DarkError.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeError = Template.bind({});
OrangeError.args = {
  error: 'Error',
};
OrangeLoading.decorators = [ThemeDecorator(Theme.Orange)];
