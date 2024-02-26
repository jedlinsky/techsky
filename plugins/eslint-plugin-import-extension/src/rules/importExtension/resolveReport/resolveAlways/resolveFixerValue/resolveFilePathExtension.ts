import type { PriorityExtensions, ResolveFilePathExtension } from './types.js'

const priorityExtensions: PriorityExtensions = ['.cjs', '.cts', '.js', '.jsx', '.mjs', '.mts', '.ts', '.tsx']

const resolveFilePathExtension: ResolveFilePathExtension = function ({ existing }) {
  if (existing.length !== 1) {
    const priorityExtension = existing.find((extension) => priorityExtensions.includes(extension))

    return priorityExtension ?? (existing.includes('.json') ? '.json' : null)
  }

  return existing[0] ?? null
}

export { resolveFilePathExtension }
