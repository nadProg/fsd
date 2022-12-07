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

import { FeedBackModalForm } from '../FeedBackForm/FeedBackModalForm';
import styles from './RatingCard.module.scss';

type RatingProps = PropsWithClassName & {
  title?: string;
};

export const RatingCard = memo((props: RatingProps) => {
  const { className, title } = props;

  const [chosenRating, setChosenRating] = useState<Nullable<number>>(null);
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

  return (
    <Card className={classNames(className, styles.Rating)}>
      <VStack gap={8} align="center">
        {title
      && <Text variant={TextVariant.Title}>{title}</Text>}
        <StarRating selectedStar={chosenRating} onSelect={onSelectRating} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FeedBackModalForm closeModal={closeModal} />
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={closeModal}>
          <FeedBackModalForm closeModal={closeModal} />
        </Drawer>
      </MobileView>
    </Card>
  );
});

RatingCard.displayName = 'RatingCard';
