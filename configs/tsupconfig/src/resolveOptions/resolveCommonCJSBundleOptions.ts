import type { ResolveCommonCJSBundleOptions } from './types.js'

const resolveCommonCJSBundleOptions: ResolveCommonCJSBundleOptions = function ({
  entry,
  esbuildOptions,
  external,
  format,
  keepNames,
  noExternal,
  noExternalDefaults,
  outDir,
  outputPath,
  platform,
  plugins,
  target,
  treeshake
}) {
  if (entry === null) {
    return null
  }

  return {
    bundle: true,
    entry,
    esbuildOptions,
    ...(external ? { external } : {}),
    extra: {
      noExternal,
      noExternalDefaults,
      outDir,
      outputPath
    },
    format: 'cjs',
    keepNames,
    minify: true,
    ...(noExternal ? { noExternal } : {}),
    outDir,
    outExtension: () => ({
      js: format === 'esm' ? '.cjs' : '.js'
    }),
    platform,
    plugins,
    shims: true,
    silent: true,
    splitting: false,
    target,
    treeshake
  }
}

export { resolveCommonCJSBundleOptions }
