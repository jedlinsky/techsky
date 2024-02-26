import { resolveEntryPath } from 'resolveOptions/resolveEntry/index.js'
import { resolveOutputDirectory } from './resolveOutputDirectory.js'
import { resolveOutputExtension } from './resolveOutputExtension.js'
import { resolveOutputPath } from './resolveOutputPath.js'
import type { ResolvedExtraEntries, ResolveExtraEntries } from './types.js'

const resolveExtraEntries: ResolveExtraEntries = function ({ extraEntry, format, outDir, pick, srcDir }) {
  const filteredEntries = extraEntry.reduce<ResolvedExtraEntries>(
    (accumulator, { format: entryFormat = format, options, path }) => {
      if (entryFormat !== pick) {
        return accumulator
      }

      const resolvedEntryPath = resolveEntryPath({ path, srcDir })

      const resolvedOutputPath = resolveOutputPath({
        outDir,
        resolvedEntryPath,
        resolveExtension: () => resolveOutputExtension({ entryFormat, format }),
        srcDir
      })

      const resolvedOutputDirectory = resolveOutputDirectory({ resolvedOutputPath })

      return [
        ...accumulator,
        {
          entry: resolvedEntryPath,
          ...(options ? { options } : {}),
          outDir: resolvedOutputDirectory,
          outputPath: resolvedOutputPath
        }
      ]
    },
    []
  )

  return filteredEntries.length === 0 ? null : filteredEntries
}

export { resolveExtraEntries }
