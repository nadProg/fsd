/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';
import { buildSassLoader } from './loaders/buildSassLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
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

  const sassLoader = buildSassLoader(isDev);

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, typeScriptLoader, sassLoader];
};
