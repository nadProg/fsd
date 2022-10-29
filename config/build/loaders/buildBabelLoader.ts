/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import { BuildOptions } from '../types/config';

export const buildBabelLoader = ({ isDev }: BuildOptions): RuleSetRule => {
  const babelLoaderItem: RuleSetUseItem = {
    loader: 'babel-loader',
    options: {
      plugins: [],
    },
  };

  if (isDev && babelLoaderItem.options && typeof babelLoaderItem.options === 'object') {
    (babelLoaderItem.options.plugins as string[]).push('react-refresh/babel');
  }

  return {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [babelLoaderItem],
  };
};
