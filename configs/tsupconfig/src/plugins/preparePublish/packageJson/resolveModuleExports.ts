import { resolveOutputPath } from 'resolvePath/resolveOutputPath.js'
import type { AugmentationExportsEntries, ResolveModuleExports } from './types.js'

const resolveModuleExports: ResolveModuleExports = function ({ augmentation, moduleExports, srcDir }) {
  if (augmentation === null && moduleExports === undefined) {
    return
  }

  const moduleExportsEntries = moduleExports ? Object.entries(moduleExports) : []

  const augmentationEntries = augmentation
    ? augmentation.reduce<AugmentationExportsEntries>((accumulator, { entry, name }) => {
        const resolvedName = `./${name}`

        if (moduleExportsEntries.some(([key]) => key === resolvedName)) {
          return accumulator
        }

        const types = resolveOutputPath({ extension: 'ts', path: entry, srcDir })

        return [...accumulator, [resolvedName, { types }]]
      }, [])
    : []

  return Object.fromEntries([...augmentationEntries, ...moduleExportsEntries])
}

export { resolveModuleExports }
