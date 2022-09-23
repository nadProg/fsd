/* eslint-disable import/no-extraneous-dependencies */
import { Configuration } from 'webpack';

import { BuildOptions } from './types/config';

export const buildMode = ({ isDev }: BuildOptions): Configuration['mode'] => (isDev ? 'development' : 'production');
