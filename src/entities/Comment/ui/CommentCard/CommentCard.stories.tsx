import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Theme } from '@/shared/providers/ThemeProvider';

import { Comment } from '../../model/types/comment';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const comment: Comment = {
  id: '1',
  text: 'Comment',
  user: {
    id: '1',
    username: 'User',
  },
};

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const NormalLight = Template.bind({});
NormalLight.args = { comment };
NormalLight.decorators = [];

export const NormalDark = Template.bind({});
NormalDark.args = { comment };
NormalDark.decorators = [];

export const NormalOrange = Template.bind({});
NormalOrange.args = { comment };
NormalOrange.decorators = [];

export const LightLoading = Template.bind({});
LightLoading.args = {
  isLoading: true,
};
LightLoading.decorators = [ThemeDecorator(Theme.Light), StoreDecorator({
  articleDetails: {
    isLoading: true,
  },
})];

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
