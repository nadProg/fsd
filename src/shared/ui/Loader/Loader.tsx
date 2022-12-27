import classNames from 'classnames';

import './Loader.scss';

// todo: add sizes adn durations maybe
type PageLoaderProps = {
  className?: string;
};

export const Loader = ({ className }: PageLoaderProps) => (
  <div className={classNames(className, 'loader')}>
    <div className="loader__block">
      <div className="loader__item" />
      <div className="loader__item" />
      <div className="loader__item" />
      <div className="loader__item" />
      <div className="loader__item" />
      <div className="loader__item" />
      <div className="loader__item" />
      <div className="loader__item" />
    </div>
  </div>
);
