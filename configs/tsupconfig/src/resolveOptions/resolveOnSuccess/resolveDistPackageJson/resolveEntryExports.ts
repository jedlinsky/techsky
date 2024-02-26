import { resolveEntryExportsSugar } from './resolveEntryExportsSugar.js'
import type { ResolvedEntryPoints, ResolveEntryExports } from './types.js'

const resolveEntryExports: ResolveEntryExports = function ({ deletedDeclarationFiles, exports }) {
  const resolvedEntryPoints = Object.entries(exports).reduce((accumulator, [entryPoint, valuesMap]) => {
    const resolvedValuesMap = Object.entries(valuesMap).reduce<Record<string, string>>((accumulator, [key, value]) => {
      if (deletedDeclarationFiles.includes(value)) {
        return accumulator
      }

      return { ...accumulator, [key]: value }
    }, {})

    const resolvedValuesMapEntries = Object.entries(resolvedValuesMap)

    if (resolvedValuesMapEntries.length === 0) {
      return accumulator
    }

    const resolvedValue =
      resolvedValuesMapEntries.length === 1 ? resolvedValuesMapEntries.at(0)?.at(1) : resolvedValuesMap

    if (!resolvedValue) {
      return accumulator
    }

    return { ...accumulator, [entryPoint]: resolvedValue }
  }, {}) as ResolvedEntryPoints

  return resolveEntryExportsSugar({ resolvedEntryPoints })
}

export { resolveEntryExports }
