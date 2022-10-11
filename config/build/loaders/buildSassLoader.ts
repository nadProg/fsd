/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildSassLoader = (isDev: boolean) => {
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

  return sassLoader;
};
