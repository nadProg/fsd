import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from 'shared/providers/ThemeProvider';
import Image from 'shared/assets/test/images/avatar.png';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    data: {
      firstname: 'firstname',
      username: 'username',
      lastname: 'lastname',
      age: 30,
      city: 'city',
      country: Country.Armenia,
      currency: Currency.Eur,
      avatar: Image,
    },
    form: {
      firstname: 'firstname',
      username: 'username',
      lastname: 'lastname',
      age: 30,
      city: 'city',
      country: Country.Armenia,
      currency: Currency.Eur,
      avatar: Image,
    },
    readonly: true,
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Data = Template.bind({});
Data.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};

export const DataDark = Template.bind({});
DataDark.args = {};
DataDark.decorators = [ThemeDecorator(Theme.Dark)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.Dark)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  error: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.Dark)];
