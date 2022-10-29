/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const sassLoader = buildSassLoader(options);

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = buildBabelLoader(options);

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, sassLoader];
};
