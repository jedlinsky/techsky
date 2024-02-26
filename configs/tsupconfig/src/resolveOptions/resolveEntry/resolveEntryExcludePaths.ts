import type { ResolveEntryExcludePaths } from './types.js'

const resolveEntryExcludePaths: ResolveEntryExcludePaths = function ({ paths }) {
  return paths.map((path) => path.replace('./', '!'))
}

export { resolveEntryExcludePaths }
