import type { ResolveExcludeEntryDTSPaths } from './types.js'

const resolveExcludeEntryDTSPaths: ResolveExcludeEntryDTSPaths = function ({ excludeEntryDTS, srcDir }) {
  if (!excludeEntryDTS) {
    return null
  }

  return [`./${srcDir}/**/*.d.ts`]
}

export { resolveExcludeEntryDTSPaths }
