import { memo, useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

export type FeedBackFormData = {
  feedBack: string
};

type FeedBackFormProps = {

  onSubmit: (data: FeedBackFormData) => Promise<void> | void;
  onCancel: () => Promise<void> | void;
};

const DEFAULT_FEEDBACK = '';

export const FeedBackForm = memo(({ onCancel, onSubmit }: FeedBackFormProps): JSX.Element => {
  const { t } = useTranslation();
  const [feedBack, setFeedBack] = useState(DEFAULT_FEEDBACK);

  const onFeedBackChange = useCallback((value: string) => {
    setFeedBack(value);
  }, [setFeedBack]);

  const onFormReset = () => {
    setFeedBack(DEFAULT_FEEDBACK);
  };

  const onFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data: FeedBackFormData = {
      feedBack,
    };

    await onSubmit(data);
    onFormReset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <VStack gap={16}>
        <Input placeholder="Введите комментарий" value={feedBack} onChange={onFeedBackChange} />
        <HStack gap={8} max justify="end">
          <Button theme="outlined" onClick={onCancel}>{t('cancel')}</Button>
          <Button theme="backgroundInverted" type="submit">{t('submit')}</Button>
        </HStack>
      </VStack>
    </form>
  );
});

FeedBackForm.displayName = 'FeedBackForm';
