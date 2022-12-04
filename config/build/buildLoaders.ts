/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const fileLoader = buildFileLoader();

  const svgLoader = buildSvgLoader();

  const sassLoader = buildSassLoader(options);

  const codeBabelLoader = buildBabelLoader({
    ...options,
    isTsx: false,
  });
  const tsxCodeBabelLoader = buildBabelLoader({
    ...options,
    isTsx: true,
  });

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, sassLoader];
};
