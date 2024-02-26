import { build } from 'tsup'
import { resolveCommonCJSBundleOptions } from 'resolveOptions/resolveCommonCJSBundleOptions.js'
import type { ResolveExtraEntryCJSOptions } from './types.js'

const resolveExtraEntryCJSOptions: ResolveExtraEntryCJSOptions = function ({
  dts,
  entry,
  esbuildOptions,
  external,
  format,
  keepNames,
  noExternal,
  noExternalDefaults,
  options,
  outDir,
  outputPath,
  platform,
  plugins,
  target,
  treeshake
}) {
  const resolvedOptions = resolveCommonCJSBundleOptions({
    entry: [entry],
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
  })

  if (resolvedOptions === null) {
    return null
  }

  return {
    ...resolvedOptions,
    ...options,
    dts,
    onSuccess: async () => {
      // eslint-disable-next-line functional/no-expression-statements
      await build({
        ...resolvedOptions,
        ...options,
        name: 'includeCJSBundle'
      })
    }
  }
}

export { resolveExtraEntryCJSOptions }
