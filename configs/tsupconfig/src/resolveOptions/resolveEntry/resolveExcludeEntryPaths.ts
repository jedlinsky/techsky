import type { ResolveExcludeEntryPaths } from './types.js'

const resolveExcludeEntryPaths: ResolveExcludeEntryPaths = function ({ excludeEntry }) {
  if (!excludeEntry) {
    return null
  }

  return excludeEntry
}

export { resolveExcludeEntryPaths }
