import type { EntityState } from '@reduxjs/toolkit';
import type { Comment } from '@/entities/Comment';

export type ArticleDetailsCommentsSchema = EntityState<Comment> & {
  isLoading: boolean;
  error?: string;
};
