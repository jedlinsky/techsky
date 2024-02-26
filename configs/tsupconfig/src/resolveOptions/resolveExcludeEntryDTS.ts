import type { ResolveExcludeEntryDTS } from './types.js'

const resolveExcludeEntryDTS: ResolveExcludeEntryDTS = function ({ excludeEntryDTS }) {
  return excludeEntryDTS ?? false
}

export { resolveExcludeEntryDTS }
