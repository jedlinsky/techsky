import { resolveEntry } from './resolveEntry/index.js'
import type { ResolveIncludeCJSBundleEntry } from './types.js'

const resolveIncludeCJSBundleEntry: ResolveIncludeCJSBundleEntry = function ({ entry, mainEntryNotOutput, srcDir }) {
  const resolvedEntry = resolveEntry({
    bundle: true,
    entry: entry === null ? null : undefined,
    mainEntryNotOutput,
    srcDir
  })

  if (resolvedEntry === null) {
    return null
  }

  if (!(resolvedEntry instanceof Array) || resolvedEntry.length !== 1) {
    throw new Error(`Unknown resolved includeCJSBundleEntry: ${JSON.stringify(resolvedEntry)}`)
  }

  return resolvedEntry
}

export { resolveIncludeCJSBundleEntry }
