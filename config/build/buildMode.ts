import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';

const buildMode = ({ isDev }: BuildOptions): Configuration['mode'] =>
  isDev ? 'development' : 'production';

export default buildMode;
