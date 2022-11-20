import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { PageLoader } from './PageLoader';

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator()],
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.decorators = [ThemeDecorator(Theme.Orange)];
