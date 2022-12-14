/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';

type BuildSassLoaderOptions = Partial<BuildOptions>;

export const buildSassLoader = ({ isDev }: BuildSassLoaderOptions): RuleSetRule => {
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

  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [styleLoaderItem, cssLoaderItem, 'sass-loader'],
  };
};
