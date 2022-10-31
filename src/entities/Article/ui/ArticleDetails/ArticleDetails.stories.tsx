import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Theme } from 'shared/providers/ThemeProvider';

import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetails } from './ArticleDetails';

const store: DeepPartial<StateSchema> = {

};

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator(store)],
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
