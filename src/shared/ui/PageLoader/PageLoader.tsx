import classNames from 'classnames';

import './PageLoader.scss';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(className, 'page-loader')}>
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
