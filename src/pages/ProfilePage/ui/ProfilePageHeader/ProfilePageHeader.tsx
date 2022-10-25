import { FC, useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';

import { PropsWithClassName } from 'shared/types';
import { Button, ButtonTheme } from 'shared/ui/Button';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

type ProfilePageHeaderProps = PropsWithClassName;

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const profileReadonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
    dispatch(profileActions.resetForm());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(className, styles.ProfilePageHeader)}>
      <div>
        <h1>{t('profile.title')}</h1>
        <p>{t('profile.content')}</p>
      </div>

      <div className={styles.actions}>
        {profileReadonly
          ? (
            <Button
              theme={ButtonTheme.Outlined}
              onClick={onEdit}
            >
              {t('profile.actions.edit')}
            </Button>
          )
          : (
            <>
              {/* todo: add red theme */}
              <Button
                theme={ButtonTheme.Outlined}
                onClick={onCancel}
              >
                {t('profile.actions.cancel')}
              </Button>
              <Button
                theme={ButtonTheme.Outlined}
                onClick={onSave}
              >
                {t('profile.actions.save')}
              </Button>
            </>
          )}
      </div>
    </div>
  );
};
