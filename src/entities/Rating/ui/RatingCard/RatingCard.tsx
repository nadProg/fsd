import { memo, useCallback, useState } from 'react';
import classNames from 'classnames';
import { MobileView, BrowserView } from 'react-device-detect';

import type { Nullable, PropsWithClassName } from '@/shared/types';

import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Modal } from '@/shared/ui/Modal';
import { Drawer } from '@/shared/ui/Drawer';
import { StarRating } from '@/shared/ui/StarRating';
import { Text, TextVariant } from '@/shared/ui/Text';

import type { FeedBackFormData } from '../FeedBackForm/FeedBackForm';
import type { RatingCardData } from '../../model/types/Rating';
import { FeedBackForm } from '../FeedBackForm/FeedBackForm';

import styles from './RatingCard.module.scss';

type RatingProps = PropsWithClassName & {
  title?: string;
  rate?: Nullable<number>;
  onRate?: (data: RatingCardData) => Promise<void> | void;
  onRateSuccess?: () => Promise<void> | void;
  onRateError?: () => Promise<void> | void;
};

export const RatingCard = memo(({
  className, title, rate = null, onRate, onRateSuccess, onRateError,
}: RatingProps) => {
  const [chosenRating, setChosenRating] = useState<Nullable<number>>(rate);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSelectRating = useCallback((value: Nullable<number>) => {
    setChosenRating(value);
    setIsModalOpen(true);
  }, [setChosenRating, setIsModalOpen]);

  const closeModal = useCallback(({ success = false } = {}) => {
    setIsModalOpen(false);

    if (!success) {
      setChosenRating(null);
    }
  }, [setIsModalOpen]);

  const onFeedBackFormSubmit = useCallback(async (data: FeedBackFormData) => {
    if (!chosenRating) {
      throw new Error('Rate is required');
    }

    try {
      const ratingCardData: RatingCardData = {
        rate: chosenRating,
        feedback: data.feedBack,
      };
      await onRate?.(ratingCardData);
      closeModal({ success: true });
      onRateSuccess?.();
    } catch (error) {
      onRateError?.();
    }
  }, [onRate, onRateSuccess, onRateError, closeModal, chosenRating]);

  return (
    <Card className={classNames(className, styles.Rating)}>
      <VStack gap={8} align="center">
        {title
      && <Text variant={TextVariant.Title}>{title}</Text>}
        <StarRating selectedStar={chosenRating} onSelect={onSelectRating} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FeedBackForm onCancel={closeModal} onSubmit={onFeedBackFormSubmit} />
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={closeModal}>
          <FeedBackForm onCancel={closeModal} onSubmit={onFeedBackFormSubmit} />
        </Drawer>
      </MobileView>
    </Card>
  );
});

RatingCard.displayName = 'RatingCard';
