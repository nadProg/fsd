import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { AddCommentForm } from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

const state: DeepPartial<StateSchema> = {
  addCommentForm: {
    text: 'comment',
  },
};

const errorState: DeepPartial<StateSchema> = {
  addCommentForm: {
    text: 'comment',
    error: 'error',
  },
};

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator(state)];

export const Error = Template.bind({});
Error.decorators = [StoreDecorator(errorState)];

export const NormalDark = Template.bind({});
NormalDark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.Dark)];

export const ErrorDark = Template.bind({});
ErrorDark.decorators = [StoreDecorator(errorState), ThemeDecorator(Theme.Dark)];

export const NormalOrange = Template.bind({});
NormalOrange.decorators = [StoreDecorator(state), ThemeDecorator(Theme.Orange)];

export const ErrorOrange = Template.bind({});
ErrorOrange.decorators = [StoreDecorator(errorState), ThemeDecorator(Theme.Orange)];
