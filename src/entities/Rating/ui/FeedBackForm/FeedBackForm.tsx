import { memo, useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

export type FeedBackFormData = {
  feedBack: string;
};

type FeedBackFormProps = {
  onSubmit: (data: FeedBackFormData) => Promise<void> | void;
  onCancel: () => Promise<void> | void;
};

const DEFAULT_FEEDBACK = '';

export const FeedBackForm = memo(({ onCancel, onSubmit }: FeedBackFormProps): JSX.Element => {
  const { t } = useTranslation();
  const [feedBack, setFeedBack] = useState(DEFAULT_FEEDBACK);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const onFeedBackChange = useCallback(
    (value: string) => {
      setFeedBack(value);
    },
    [setFeedBack],
  );

  const onFormReset = () => {
    setFeedBack(DEFAULT_FEEDBACK);
  };

  const onFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    setIsFormSubmitting(true);
    try {
      evt.preventDefault();

      const data: FeedBackFormData = {
        feedBack,
      };

      await onSubmit(data);
      onFormReset();
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <VStack gap={16}>
        <Input
          placeholder="Введите комментарий"
          value={feedBack}
          onChange={onFeedBackChange}
          disabled={isFormSubmitting}
        />
        <HStack gap={8} max justify="end">
          <Button theme="outlined" onClick={onCancel} disabled={isFormSubmitting}>
            {t('cancel')}
          </Button>
          <Button theme="backgroundInverted" type="submit" disabled={isFormSubmitting}>
            {t('submit')}
          </Button>
        </HStack>
      </VStack>
    </form>
  );
});

FeedBackForm.displayName = 'FeedBackForm';
