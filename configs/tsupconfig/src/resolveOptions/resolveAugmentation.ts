import { resolveEntryPath } from './resolveEntry/index.js'
import { resolveOutputDirectory, resolveOutputPath } from './resolveExtraEntry/index.js'
import type { ResolveAugmentation } from './types.js'

const resolveAugmentation: ResolveAugmentation = function ({ augmentation, outDir, srcDir }) {
  if (augmentation === undefined || augmentation.length === 0) {
    return null
  }

  return augmentation.map((path) => {
    const resolvedEntryPath = resolveEntryPath({ path, srcDir })
    const resolvedOutputPath = resolveOutputPath({ outDir, resolvedEntryPath, resolveExtension: () => 'd.ts', srcDir })
    const resolvedOutputDirectory = resolveOutputDirectory({ resolvedOutputPath })

    const name = resolvedEntryPath.split('/').at(-1)?.replace('.d.ts', '') ?? 'augmentation'

    return {
      entry: resolvedEntryPath,
      name,
      outDir: resolvedOutputDirectory,
      outputPath: resolvedOutputPath
    }
  })
}

export { resolveAugmentation }
