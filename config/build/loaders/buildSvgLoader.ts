/* eslint-disable import/no-extraneous-dependencies */
import { RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => ({
  test: /\.svg$/,
  exclude: /node_modules/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    },
  ],
});
