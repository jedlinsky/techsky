import { resolveOutputPath } from 'resolvePath/resolveOutputPath.js'
import type { ResolveExports } from './types.js'

const resolveExports: ResolveExports = function ({ bundle, mainEntry, packageJson, srcDir }) {
  if (mainEntry === null) {
    return packageJson.exports ?? null
  }

  if (packageJson.exports && typeof packageJson.exports !== 'string') {
    return Object.entries(packageJson.exports).reduce((accumulator, [key, path]) => {
      return {
        ...accumulator,
        [key]: resolveOutputPath({ path, srcDir })
      }
    }, {})
  }

  return {
    '.':
      bundle || !packageJson.exports
        ? mainEntry
        : resolveOutputPath({
            path: packageJson.exports,
            srcDir
          })
  }
}

export { resolveExports }
