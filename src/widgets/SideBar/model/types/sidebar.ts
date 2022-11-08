import React from 'react';

export type SideBarItem = {
  path: string;
  key: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
};
