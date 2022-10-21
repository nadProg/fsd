import { FC } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { PropsWithClassName } from 'shared/types';

import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Input } from 'shared/ui/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

import styles from './ProfileCard.module.scss';

type ProfileCardProps = PropsWithClassName;

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation();

  const profileData = useSelector(getProfileData);
  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(className, styles.Profile)}>

      <Input value={profileData?.firstname || ''} placeholder="Ваше имя" />
      <Input value={profileData?.lastname || ''} placeholder="Ваша фамилия" />
    </div>
  );
};
