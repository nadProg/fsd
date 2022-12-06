import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/providers/ThemeProvider';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import Image from '@/shared/assets/test/images/avatar.png';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ProfilePage } from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({
    editableProfile: {
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
      isLoading: false,
    },
  })],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];
