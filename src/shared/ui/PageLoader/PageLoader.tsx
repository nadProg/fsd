import { classNames } from 'shared/lib/classNames';

import './PageLoader.scss';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames('page-loader', {}, [className])}>
    <div className="example">
      <div className="block">
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>
    </div>
  </div>
);
