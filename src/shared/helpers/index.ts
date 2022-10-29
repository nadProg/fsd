import { AxiosError } from 'axios';

type DefaultExport<Module> = { default: Module };

export const makeModuleDefault = <Module>(
  mod: Module,
): DefaultExport<Module> => ({
  default: mod,
});

export const asyncDelay = (time = 1000) => new Promise((resolve) => {
  setTimeout(resolve, time);
});

export const isAxiosError = (error: unknown): error is AxiosError => {
  if (error instanceof Error) {
    return !!(error as AxiosError).isAxiosError;
  }

  return false;
};
