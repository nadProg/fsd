/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import { BuildOptions } from '../types/config';

type BabelLoaderOptions = BuildOptions & {
  isTsx?: boolean;
};

export const buildBabelLoader = ({
  isDev,
  isTsx,
}: BabelLoaderOptions): RuleSetRule => {
  const babelLoaderItem: RuleSetUseItem = {
    loader: 'babel-loader',
    options: {
      plugins: [
        ['@babel/plugin-transform-typescript',
          {
            isTsx,
          }],
        '@babel/plugin-transform-runtime',
      ],
    },
  };

  if (isDev && babelLoaderItem.options && typeof babelLoaderItem.options === 'object') {
    (babelLoaderItem.options.plugins as string[]).push('react-refresh/babel');
  }

  return {
    test: isTsx ? /\.[jt]sx$/ : /\.[jt]s$/,
    exclude: /node_modules/,
    use: [babelLoaderItem],
  };
};
