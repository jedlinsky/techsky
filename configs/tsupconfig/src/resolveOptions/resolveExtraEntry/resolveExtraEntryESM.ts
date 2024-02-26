import { resolveExtraEntries } from './resolveExtraEntries.js'
import { resolveExtraEntryESMOptions } from './resolveExtraEntryESMOptions.js'
import type { ExtraEntryESM, ResolveExtraEntryESM } from './types.js'

const resolveExtraEntryESM: ResolveExtraEntryESM = function ({
  dts,
  esbuildOptions,
  external,
  extraEntry,
  format,
  keepNames,
  minify,
  noExternal,
  outDir,
  platform,
  plugins,
  srcDir,
  target,
  treeshake
}) {
  const esmEntries = resolveExtraEntries({ extraEntry, format, outDir, pick: 'esm', srcDir })

  if (esmEntries === null) {
    return null
  }

  const esmOptions = esmEntries.reduce<ExtraEntryESM>((accumulator, { entry, options, outDir }) => {
    const resolvedOptions = resolveExtraEntryESMOptions({
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
    })

    return [...accumulator, resolvedOptions]
  }, [])

  return esmOptions.length === 0 ? null : esmOptions
}

export { resolveExtraEntryESM }
