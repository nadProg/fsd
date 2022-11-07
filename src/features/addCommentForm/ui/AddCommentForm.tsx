import { FC, useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input';
import { PropsWithClassName } from 'shared/types';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';

import { addCommentFormActions, addCommentFormReducers } from '../model/slice/addCommentFormSlice';
import { getAddCommentFormText } from '../model/selectors/getAddCommentFormText/getAddCommentFormText';
import { getAddCommentFormError } from '../model/selectors/getAddCommentFormError/getAddCommentFormError';

import styles from './AddCommentForm.module.scss';

type AddCommentFormProps = PropsWithClassName & {
  onSendComment: (text: string) => Promise<void>;
};

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducers,
};

export const AddCommentForm: FC<AddCommentFormProps> = ({ className, onSendComment }) => {
  useDynamicReducers(reducers);

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const onCommentTexChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const sendComment = useCallback(async () => {
    await onSendComment(text);
    dispatch(addCommentFormActions.clearForm());
  }, [onSendComment, text, dispatch]);

  return (
    <div className={classNames(className, styles.AddCommentForm)}>
      <Input
        className={styles.input}
        placeholder="Введите комментарий"
        value={text}
        onChange={onCommentTexChange}
      />

      <Button
        theme={ButtonTheme.Outlined}
        onClick={sendComment}
      >
        {t('comments.form.submit')}
      </Button>
    </div>
  );
};
