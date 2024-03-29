declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.jpg';

declare module '*.jpeg';

declare module '*.png';

declare module '*.gif';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
declare const __API_URL__: string;

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';
