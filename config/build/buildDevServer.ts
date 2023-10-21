import { IBuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(option: IBuildOptions): DevServerConfiguration {
  return {
    port: option.port,
    open: true,
    historyApiFallback: true,
  };
}
