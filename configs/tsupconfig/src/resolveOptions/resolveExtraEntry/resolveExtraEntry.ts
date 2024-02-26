import { resolveExtraEntryCJS } from './resolveExtraEntryCJS.js'
import { resolveExtraEntryESM } from './resolveExtraEntryESM.js'
import type { ResolveExtraEntry } from './types.js'

const resolveExtraEntry: ResolveExtraEntry = function ({
  dts,
  esbuildOptions,
  external,
  extraEntry,
  format,
  keepNames,
  minify,
  noExternal,
  noExternalDefaults,
  outDir,
  platform,
  plugins,
  srcDir,
  target,
  treeshake
}) {
  if (extraEntry === undefined || extraEntry.length === 0) {
    return
  }

  const cjs = resolveExtraEntryCJS({
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
  })

  const esm = resolveExtraEntryESM({
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
  })

  return {
    cjs,
    esm
  }
}

export { resolveExtraEntry }
