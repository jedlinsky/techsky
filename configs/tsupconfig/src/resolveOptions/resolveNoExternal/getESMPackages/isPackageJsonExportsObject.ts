import type { NormalizedPackageJson } from 'read-package-up'
import type { PackageJsonExportsObject } from './types.js'

const isPackageJsonExportsObject = function (
  exports: NormalizedPackageJson['exports']
): exports is PackageJsonExportsObject {
  return exports && typeof exports === 'object' && !Array.isArray(exports) ? true : false
}

export { isPackageJsonExportsObject }
