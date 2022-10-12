import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';

import { BuildPaths } from '../build/types/config';
import { buildSassLoader } from '../build/loaders/buildSassLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line array-callback-return,consistent-return
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
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

  config.module.rules.push(buildSassLoader(true));

  return config;
};
