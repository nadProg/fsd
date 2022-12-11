import { Id } from '@/shared/types';

export type Rating = {
  id: Id
  rate: number;
  feedback: string;
};

export type RatingCardData = {
  rate: number;
  feedback: string;
};
