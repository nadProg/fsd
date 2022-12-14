/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import { babelRemovePropsPlugin } from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

type BabelLoaderOptions = BuildOptions & {
  isTsx?: boolean;
};

export const buildBabelLoader = ({
  isDev,
  isTsx,
}: BabelLoaderOptions): RuleSetRule => {
  const isProd = !isDev;

  const babelLoaderItem: RuleSetUseItem = {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        ['@babel/plugin-transform-typescript',
          {
            isTsx,
          }],
        '@babel/plugin-transform-runtime',
      ],
    },
  };

  if (babelLoaderItem.options
    && typeof babelLoaderItem.options === 'object'
    && Array.isArray(babelLoaderItem.options.plugins)) {
    if (isDev) {
      babelLoaderItem.options.plugins.push('react-refresh/babel');
    }

    if (isProd && isTsx) {
      babelLoaderItem.options.plugins.push([
        babelRemovePropsPlugin, { props: ['data-testid'] },
      ]);
    }
  }

  return {
    test: isTsx ? /\.[jt]sx$/ : /\.[jt]s$/,
    exclude: /node_modules/,
    use: [babelLoaderItem],
  };
};
