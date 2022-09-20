import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => [
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
  }),
  new ProgressPlugin(),
  new DefinePlugin({
    __IS_DEV__: Boolean(isDev),
  }),
];

export default buildPlugins;
