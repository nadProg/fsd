import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { ArticleView } from '@/entities/Article';

export const VIEWS = [
  {
    view: ArticleView.Grid,
    icon: GridIcon,
  },
  {
    view: ArticleView.List,
    icon: ListIcon,
  },
] as const;
