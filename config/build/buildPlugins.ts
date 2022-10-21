/* eslint-disable import/no-extraneous-dependencies */
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: Boolean(isDev),
      __API_URL__: JSON.stringify(apiUrl),
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  // todo: create script to run analyzer
  // new BundleAnalyzerPlugin(),

  return plugins;
};
