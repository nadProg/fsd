export const Project = {
  Frontend: 'frontend',
  Storybook: 'storybook',
  Jest: 'jest',
} as const;

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
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
  project: typeof Project[keyof typeof Project];
};
