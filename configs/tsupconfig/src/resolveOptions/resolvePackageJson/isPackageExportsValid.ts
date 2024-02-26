import type { IsPackageExportsValid } from './types.js'

const isPackageExportsValid: IsPackageExportsValid = function ({ packageJson }) {
  if (!packageJson.exports) {
    return true
  }

  if (typeof packageJson.exports === 'string') {
    return packageJson.exports.startsWith('./')
  }

  if (packageJson.exports instanceof Array) {
    return false
  }

  if (Object.keys(packageJson.exports).some((key) => !key.startsWith('.'))) {
    return false
  }

  if (Object.values(packageJson.exports).some((value) => typeof value !== 'string' || !value.startsWith('./'))) {
    return false
  }

  return true
}

export { isPackageExportsValid }
