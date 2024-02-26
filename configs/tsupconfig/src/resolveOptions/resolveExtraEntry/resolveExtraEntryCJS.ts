import { resolveExtraEntries } from './resolveExtraEntries.js'
import { resolveExtraEntryCJSOptions } from './resolveExtraEntryCJSOptions.js'
import type { ExtraEntryCJS, ResolveExtraEntryCJS } from './types.js'

const resolveExtraEntryCJS: ResolveExtraEntryCJS = function ({
  dts,
  esbuildOptions,
  external,
  extraEntry,
  format,
  keepNames,
  noExternal,
  noExternalDefaults,
  outDir,
  platform,
  plugins,
  srcDir,
  target,
  treeshake
}) {
  const cjsEntries = resolveExtraEntries({ extraEntry, format, outDir, pick: 'cjs', srcDir })

  if (cjsEntries === null) {
    return null
  }

  const cjsOptions = cjsEntries.reduce<ExtraEntryCJS>((accumulator, entry) => {
    const resolvedOptions = resolveExtraEntryCJSOptions({
      ...entry,
      dts,
      esbuildOptions,
      external,
      format,
      keepNames,
      noExternal,
      noExternalDefaults,
      platform,
      plugins,
      target,
      treeshake
    })

    if (resolvedOptions === null) {
      return accumulator
    }

    return [...accumulator, resolvedOptions]
  }, [])

  return cjsOptions.length === 0 ? null : cjsOptions
}

export { resolveExtraEntryCJS }
