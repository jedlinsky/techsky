import type { Entries } from 'type-fest/source/entries.js'
import type { ResolvedEntryPoints, ResolveEntryExportsSugar } from './types.js'

const resolveEntryExportsSugar: ResolveEntryExportsSugar = function ({ resolvedEntryPoints }) {
  const resolvedEntryPointsEntries = Object.entries(resolvedEntryPoints) as Entries<ResolvedEntryPoints>

  if (resolvedEntryPointsEntries.length !== 1) {
    return resolvedEntryPoints
  }

  const [entryPoint, value] = resolvedEntryPointsEntries.at(0) as Entries<ResolvedEntryPoints>[number]

  if (entryPoint === '.' && typeof value === 'string') {
    return value
  }

  return resolvedEntryPoints
}

export { resolveEntryExportsSugar }
