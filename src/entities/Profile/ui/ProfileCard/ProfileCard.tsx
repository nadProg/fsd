import { FC } from 'react';
import classNames from 'classnames';

import { useTranslation } from 'react-i18next';

import type { PropsWithClassName } from 'shared/types';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import type { Profile } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';

type ProfileCardProps = PropsWithClassName & {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
};

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className, data, isLoading, error,
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
      <div className={classNames(className, styles.Profile)}>
        {error}
      </div>
    );
  }

  return (
    <div className={classNames(className, styles.Profile)}>

      <Input value={data?.firstname || ''} placeholder="Ваше имя" />
      <Input value={data?.lastname || ''} placeholder="Ваша фамилия" />
    </div>
  );
};
