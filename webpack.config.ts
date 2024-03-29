import path from 'path';
import { Configuration } from 'webpack';
import { Project } from './config/build/types/config';
import { buildWebpackConfig, BuildEnv, BuildPaths } from './config/build';

const DEFAULT_PORT = 3000;
const DEFAULT_API_URL = 'http://localhost:8000';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
  locales: path.resolve(__dirname, 'public', 'locales'),
  buildLocales: path.resolve(__dirname, 'build', 'locales'),
};

export default (env: BuildEnv): Configuration =>
  buildWebpackConfig({
    paths,
    isDev: !env.prod,
    analyze: !!env.analyze,
    port: env.port || DEFAULT_PORT,
    apiUrl: env.apiUrl || DEFAULT_API_URL,
    project: Project.Frontend,
  });
