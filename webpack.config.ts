import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig, BuildEnv, BuildPaths } from './config/build';

const DEFAULT_PORT = 3000;

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
  const config: Configuration = buildWebpackConfig({
    paths,
    isDev: !env.prod,
    port: env.port || DEFAULT_PORT,
  });

  return config;
};
