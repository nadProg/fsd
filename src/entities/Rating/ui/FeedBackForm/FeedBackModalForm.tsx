import { FormEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

type FeedBackModalFormProps = {
  closeModal: (options?: { success?: boolean }) => void;
};
export const FeedBackModalForm = ({ closeModal }: FeedBackModalFormProps): JSX.Element => {
  const { t } = useTranslation();

  const onSendFeedBack = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    closeModal({ success: true });
  }, [closeModal]);

  const onFeedBackCancel = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <form onSubmit={onSendFeedBack}>
      <VStack gap={16}>
        <Input placeholder="Введите комментарий" />
        <HStack gap={8} max justify="end">
          <Button theme="outlined" onClick={onFeedBackCancel}>{t('cancel')}</Button>
          <Button theme="backgroundInverted" type="submit">{t('submit')}</Button>
        </HStack>
      </VStack>
    </form>
  );
};
