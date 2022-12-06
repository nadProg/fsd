import { FC, FormEventHandler, useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import { TextTheme, Text } from '@/shared/ui/Text';
import { useDynamicReducers } from '@/shared/hooks/useDynamicReducers';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { PropsWithClassName } from '@/shared/types';
import { loginActions, loginReducer } from '../../model/slice/loginSlice/loginSlice';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsSubmitting } from '../../model/selectors/getLoginIsSbumitting/getLoginIsSubmitting';

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

const dynamicReducers = {
  loginForm: loginReducer,
};

export type LoginFormProps = PropsWithClassName & {
  onSuccess: () => void;
};

export const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isSubmitting = useSelector(getLoginIsSubmitting);
  const error = useSelector(getLoginError);

  useDynamicReducers(dynamicReducers);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onFormSubmit = useCallback<FormEventHandler>(async (evt) => {
    evt.preventDefault();

    const result = await dispatch(loginByUsername({
      username,
      password,
    }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <form
      className={classNames(className, styles.LoginForm)}
      onSubmit={onFormSubmit}
    >
      {error && <Text theme={TextTheme.Error}>{t(`login-form.error.${error}`)}</Text>}

      <Input
        className={styles.input}
        value={username}
        onChange={onChangeUsername}
        placeholder={t('login-form.name.placeholder')}
        type="text"
        autoFocus
      />

      <Input
        className={styles.input}
        value={password}
        onChange={onChangePassword}
        placeholder={t('login-form.password.placeholder')}
        type="password"
      />

      <Button
        theme={ButtonTheme.BackgroundInverted}
        className={styles.submitBtn}
        disabled={isSubmitting}
        type="submit"
      >
        {t('login-form.submit')}
      </Button>
    </form>
  );
};
