/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

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

  const styleLoaderItem: RuleSetUseItem = isDev
    ? 'style-loader'
    : MiniCssExtractPlugin.loader;

  const cssLoaderItem: RuleSetUseItem = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resPath: string) => resPath.includes('.module.'),
        localIdentName: isDev
          ? '[path][name]__[local]--[hash:base64:5]'
          : '[hash:base64:8]',
      },
    },
  };

  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [styleLoaderItem, cssLoaderItem, 'sass-loader'],
  };

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, typeScriptLoader, sassLoader];
};
