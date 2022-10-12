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
}: BuildOptions): WebpackPluginInstance[] => [
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  isDev && new ReactRefreshWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
  }),
  new ProgressPlugin(),
  new DefinePlugin({
    __IS_DEV__: Boolean(isDev),
  }),
  // todo: create script to run analyzer
  // new BundleAnalyzerPlugin(),
].filter(Boolean);
