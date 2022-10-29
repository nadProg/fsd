import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';

import { BuildPaths, Project } from '../build/types/config';
import { buildSassLoader } from '../build/loaders/buildSassLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (config.resolve) {
    config.resolve.modules?.push(paths.src);
    config.resolve.extensions?.push('.ts', '.tsx');
  }

  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (typeof rule === 'object' && /svg/.test(rule.test as string)) {
        return ({
          ...rule, exclude: /\.svg$/i,
        });
      }

      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildSassLoader({ isDev: true }));
  }

  if (config.plugins) {
    config.plugins.push(new DefinePlugin({
      __IS_DEV__: true,
      __API_URL__: JSON.stringify(''),
      __PROJECT__: JSON.stringify(Project.Storybook),
    }));
  }

  return config;
};
