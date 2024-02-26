import { resolveEntryPath } from './resolveEntry/index.js'
import type { ResolveExcludeEntry } from './types.js'

const resolveExcludeEntry: ResolveExcludeEntry = function ({ excludeEntry, srcDir }) {
  if (excludeEntry === undefined || excludeEntry.length === 0) {
    return null
  }

  const resolvedExcludeEntry = excludeEntry.map((path) => resolveEntryPath({ path, srcDir }))

  return [...new Set(resolvedExcludeEntry)]
}

export { resolveExcludeEntry }
