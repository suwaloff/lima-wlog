import { type ResolveOptions } from 'webpack';
import { type IBuildOptions } from './types/config';

export function buildResolvers (options: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  };
}
