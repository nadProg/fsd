import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export type ArticleDetailsCommentsSchema = EntityState<Comment> & {
  isLoading: boolean;
  error?: string;
};
