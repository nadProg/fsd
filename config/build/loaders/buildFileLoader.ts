/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule } from 'webpack';

export const buildFileLoader = (): RuleSetRule => ({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
});
