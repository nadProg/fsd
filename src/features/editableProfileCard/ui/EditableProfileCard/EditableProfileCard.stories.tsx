import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '@/shared/assets/test/images/avatar.png';
import { Theme } from '@/shared/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/editableProfileCard',
  component: EditableProfileCard,
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
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.decorators = [ThemeDecorator(Theme.Orange)];
