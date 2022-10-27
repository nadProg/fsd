import React from 'react';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export type SideBarItem = {
  path: string;
  key: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
};

export const SideBarItems: SideBarItem[] = [
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
  {
    path: RoutePath.profile,
    key: 'profile',
    icon: ProfileIcon,
    authOnly: true,
  },
];
