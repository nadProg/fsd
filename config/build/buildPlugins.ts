import {
  WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] =>
  [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    isDev && new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: Boolean(isDev),
    }),
  ].filter(Boolean);

export default buildPlugins;
