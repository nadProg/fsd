import { createSelector } from '@reduxjs/toolkit';

import { AppRoute } from '@/shared/constants/router';

import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { getUserAuthData } from '@/entities/User';

import { SideBarItem } from '../types/sidebar';

export const getSideBarItems = createSelector(getUserAuthData, (userData): SideBarItem[] => {
  let items: SideBarItem[] = [
    {
      path: AppRoute.Main(),
      key: 'main',
      icon: HomeIcon,
    },
    {
      path: AppRoute.About(),
      key: 'about',
      icon: AboutIcon,
    },
  ];

  if (userData) {
    const id = userData?.id;
    items = items.concat([
      {
        path: AppRoute.Profile(id),
        key: 'profile',
        icon: ProfileIcon,
      },
      {
        path: AppRoute.Articles(),
        key: 'articles',
        icon: ArticleIcon,
      },
    ]);
  }

  return items;
});
