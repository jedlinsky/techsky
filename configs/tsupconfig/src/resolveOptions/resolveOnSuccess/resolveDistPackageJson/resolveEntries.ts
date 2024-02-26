import { resolveEntryExports } from './resolveEntryExports.js'
import { resolveEntryTypes } from './resolveEntryTypes.js'
import type { DistPackageJson } from 'packageJson/types.js'
import type { ResolvedModuleExportsNonUndefinable } from 'plugins/preparePublish/packageJson/types.js'
import type { ResolveEntries } from './types.js'

const resolveEntries: ResolveEntries = function ({ deletedDeclarationFiles, distPackageJson }) {
  return Object.entries(distPackageJson).reduce((accumulator, [key, value]) => {
    switch (key) {
      case 'exports': {
        const resolvedExports = resolveEntryExports({
          deletedDeclarationFiles,
          exports: value as ResolvedModuleExportsNonUndefinable
        })

        return { ...accumulator, [key]: resolvedExports }
      }

      case 'types': {
        const { keep } = resolveEntryTypes({ deletedDeclarationFiles, value })

        if (!keep) {
          return accumulator
        }

        return { ...accumulator, [key]: value }
      }

      default: {
        return { ...accumulator, [key]: value }
      }
    }
  }, {}) as DistPackageJson
}

export { resolveEntries }
