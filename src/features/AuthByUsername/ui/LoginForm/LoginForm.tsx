import { FC, useCallback } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';

import { TextTheme, Text } from 'shared/ui/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

type LoginFormProps = {
  className?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    isSubmitting,
    error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({
      username,
      password,
    }));
  }, [dispatch, username, password]);

  return (
    <div
      className={classNames(className, styles.LoginForm)}
    >
      {error && <Text theme={TextTheme.Error}>{error}</Text>}

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
        type="text"
      />
      <Button
        theme={ButtonTheme.BackgroundInverted}
        className={styles.submitBtn}
        onClick={onLoginClick}
        disabled={isSubmitting}
      >
        {t('login-form.submit')}
      </Button>
    </div>
  );
};
