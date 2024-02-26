import { resolveAugmentationPaths } from './resolveAugmentationPaths.js'
import { resolveEntryExcludePaths } from './resolveEntryExcludePaths.js'
import { resolveExcludeEntryDTSPaths } from './resolveExcludeEntryDTSPaths.js'
import { resolveExcludeEntryPaths } from './resolveExcludeEntryPaths.js'
import { resolveExtraEntryPaths } from './resolveExtraEntryPaths.js'
import type { ResolveEntryExclude } from './types.js'

const resolveEntryExclude: ResolveEntryExclude = function ({
  augmentation,
  excludeEntry,
  excludeEntryDTS,
  extraEntry,
  srcDir
}) {
  const augmentationPaths = resolveAugmentationPaths({ augmentation })
  const extraEntryPaths = resolveExtraEntryPaths({ extraEntry, srcDir })
  const excludeEntryPaths = resolveExcludeEntryPaths({ excludeEntry })
  const excludeEntryDTSPaths = resolveExcludeEntryDTSPaths({ excludeEntryDTS, srcDir })

  const mergedPaths = [
    ...(augmentationPaths ?? []),
    ...(extraEntryPaths ?? []),
    ...(excludeEntryPaths ?? []),
    ...(excludeEntryDTSPaths ?? [])
  ]

  if (mergedPaths.length === 0) {
    return null
  }

  const paths = [...new Set(mergedPaths)]

  return resolveEntryExcludePaths({ paths })
}

export { resolveEntryExclude }
