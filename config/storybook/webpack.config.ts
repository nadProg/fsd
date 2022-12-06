import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import { BuildPaths, Project } from '../build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildSassLoader } from '../build/loaders/buildSassLoader';

const fileLoader: RuleSetRule = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: 'file-loader',
  options: {
    name: '[path][name].[ext]',
  },
};

const alias = {
  '@': path.resolve(__dirname, '..', '..', 'src'),
};

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  if (config.resolve) {
    config.resolve.modules?.push(paths.src);
    config.resolve.extensions?.push('.ts', '.tsx');

    const prevAlias = config.resolve.alias || {};

    config.resolve.alias = {
      ...prevAlias,
      ...alias,
    };
  }

  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (typeof rule === 'object' && /svg/.test(rule.test as string)) {
        return ({
          ...rule, exclude: /\.(png|svg|jpe?g|gif)$/i,
        });
      }

      return rule;
    });

    config.module.rules.push(buildSvgLoader());

    config.module.rules.push(fileLoader);

    config.module.rules.push(buildSassLoader({ isDev: true }));
  }

  if (config.plugins) {
    config.plugins.push(new DefinePlugin({
      __IS_DEV__: true,
      __API_URL__: JSON.stringify('http://storybook.mock.api.com'),
      __PROJECT__: JSON.stringify(Project.Storybook),
    }));
  }

  return config;
};
