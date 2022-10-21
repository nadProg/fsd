export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
};

export type BuildEnv = {
  port?: number;
  prod?: true;
  analyze?: true;
  apiUrl?: string;
};

export type BuildOptions = {
  isDev: boolean;
  analyze: boolean;
  paths: BuildPaths;
  port: number;
  apiUrl: string;
};
