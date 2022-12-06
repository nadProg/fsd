import { createSelector } from '@reduxjs/toolkit';

import { RoutePath } from '@/shared/config/router/routeConfig/routeConfig';

import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { getUserAuthData } from '@/entities/User';

import { SideBarItem } from '../types/sidebar';

export const getSideBarItems = createSelector(getUserAuthData, (userData): SideBarItem[] => {
  let items: SideBarItem[] = [
    {
      path: RoutePath.main,
      key: 'main',
      icon: HomeIcon,
    },
    {
      path: RoutePath.about,
      key: 'about',
      icon: AboutIcon,
    },
  ];

  if (userData) {
    const id = userData?.id;
    items = items.concat([
      {
        path: RoutePath.profile + id,
        key: 'profile',
        icon: ProfileIcon,

      },
      {
        path: RoutePath.articles,
        key: 'articles',
        icon: ArticleIcon,
      },
    ]);
  }

  return items;
});
