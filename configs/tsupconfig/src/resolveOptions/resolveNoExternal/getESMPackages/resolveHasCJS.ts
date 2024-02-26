import { isPackageJsonExportsObject } from './isPackageJsonExportsObject.js'
import type { ResolveHasCJS } from './types.js'

const resolveHasCJS: ResolveHasCJS = function ({ packageJson }) {
  if (packageJson === null) {
    return true
  }

  if (!('type' in packageJson)) {
    return true
  }

  if (packageJson.type === 'module') {
    return false
  }

  if ('main' in packageJson) {
    return true
  }

  const { exports } = packageJson

  if (isPackageJsonExportsObject(exports)) {
    if ('require' in exports) {
      return true
    }

    // eslint-disable-next-line import/no-commonjs
    if (isPackageJsonExportsObject(exports['.']) && 'require' in exports['.']) {
      return true
    }

    const firstExport = Object.values(exports).at(0)

    if (isPackageJsonExportsObject(firstExport) && 'require' in firstExport) {
      return true
    }
  }

  return false
}

export { resolveHasCJS }
