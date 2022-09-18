import { Configuration } from 'webpack';

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
};

export type BuildEnv = {
  port?: number;
  prod?: true;
};

export type BuildOptions = {
  isDev?: boolean;
  paths: BuildPaths;
  port: number;
};
