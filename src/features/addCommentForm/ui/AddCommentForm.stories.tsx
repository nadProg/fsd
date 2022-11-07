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
  loginForm: {
    username: 'user',
    password: '123',
  },
};

const submittingState: DeepPartial<StateSchema> = {
  loginForm: {
    ...state.loginForm,
    isSubmitting: true,
  },
};

const errorState: DeepPartial<StateSchema> = {
  loginForm: {
    ...state.loginForm,
    error: '403',
  },
};

export const Default = Template.bind({});
Default.decorators = [StoreDecorator(state)];

export const Submitting = Template.bind({});
Submitting.decorators = [StoreDecorator(submittingState)];

export const Error = Template.bind({});
Error.decorators = [StoreDecorator(errorState)];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.Dark)];

export const SubmittingDark = Template.bind({});
SubmittingDark.decorators = [StoreDecorator(submittingState), ThemeDecorator(Theme.Dark)];

export const ErrorDark = Template.bind({});
ErrorDark.decorators = [StoreDecorator(errorState), ThemeDecorator(Theme.Dark)];
