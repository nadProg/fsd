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

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, sassLoader];
};
