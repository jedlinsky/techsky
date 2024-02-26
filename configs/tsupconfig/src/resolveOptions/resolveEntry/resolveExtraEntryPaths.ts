import { resolveEntryPath } from './resolveEntryPath.js'
import type { ResolveExtraEntryPaths } from './types.js'

const resolveExtraEntryPaths: ResolveExtraEntryPaths = function ({ extraEntry, srcDir }) {
  if (!extraEntry) {
    return null
  }

  return extraEntry.map(({ path }) => resolveEntryPath({ path, srcDir }))
}

export { resolveExtraEntryPaths }
