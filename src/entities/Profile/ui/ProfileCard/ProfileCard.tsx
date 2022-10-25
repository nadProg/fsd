import { FC } from 'react';
import classNames from 'classnames';

import { useTranslation } from 'react-i18next';

import type { PropsWithClassName } from 'shared/types';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextTheme } from 'shared/ui/Text';

import type { Profile } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';

type ProfileCardProps = PropsWithClassName & {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
};

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    form,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(className, styles.Profile, styles.loading)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(className, styles.Profile, styles.error)}>
        <Text theme={TextTheme.Error}>
          {error}
        </Text>
      </div>
    );
  }

  const dataSource = readonly ? data : form;

  return (
    <div className={classNames(className, styles.Profile)}>
      <Input
        value={dataSource?.firstname || ''}
        placeholder="Ваше имя"
        onChange={onChangeFirstName}
        readOnly={readonly}
      />

      <Input
        value={dataSource?.lastname || ''}
        placeholder="Ваша фамилия"
        onChange={onChangeLastName}
        readOnly={readonly}
      />

      <Input
        value={dataSource?.age || ''}
        placeholder="Ваш возраст"
        onChange={onChangeAge}
        readOnly={readonly}
      />

      <Input
        value={dataSource?.city || ''}
        placeholder="Ваш город"
        onChange={onChangeCity}
        readOnly={readonly}
      />
    </div>
  );
};
