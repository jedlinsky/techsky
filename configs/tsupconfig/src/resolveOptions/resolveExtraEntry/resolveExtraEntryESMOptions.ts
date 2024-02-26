import type { ResolveExtraEntryESMOptions } from './types.js'

const resolveExtraEntryESMOptions: ResolveExtraEntryESMOptions = function ({
  dts,
  entry,
  esbuildOptions,
  external,
  format,
  keepNames,
  minify,
  noExternal,
  options,
  outDir,
  platform,
  plugins,
  target,
  treeshake
}) {
  return {
    bundle: true,
    dts,
    entry: [entry],
    esbuildOptions,
    ...(external ? { external } : {}),
    format: 'esm',
    keepNames,
    minify,
    ...(noExternal ? { noExternal } : {}),
    outDir,
    outExtension: () => ({
      js: format === 'esm' ? '.js' : '.mjs'
    }),
    platform,
    plugins,
    silent: true,
    splitting: false,
    target,
    treeshake,
    ...options
  }
}

export { resolveExtraEntryESMOptions }
