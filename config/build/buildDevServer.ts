/* eslint-disable import/no-extraneous-dependencies */
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = ({ port, isDev }: BuildOptions): DevServerConfiguration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: isDev,
});
