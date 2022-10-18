import { FC, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';

import styles from './LoginForm.module.scss';

type LoginFormProps = {
  className?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [value, setValue] = useState('');
  const onChange = (newValue: string) => setValue(newValue);

  return (
    <div
      className={classNames(className, styles.LoginForm)}
    >
      <Input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={t('login-form.name.placeholder')}
        type="text"
        autoFocus
      />
      <Input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={t('login-form.password.placeholder')}
        type="text"
      />
      <Button className={styles.submitBtn}>{t('login-form.submit')}</Button>
    </div>
  );
};
