import { getPackageJson } from 'packageJson/index.js'
import { isPackageExportsValid } from './isPackageExportsValid.js'
import type { PackageJson, ResolvePackageJson } from './types.js'

const resolvePackageJson: ResolvePackageJson = function () {
  const packageJson = getPackageJson()

  if (!isPackageExportsValid({ packageJson })) {
    throw new Error(
      `package.json:exports is for '@techsky/tsupconfig' invalid. You have to either (1) omit exports field (2) make it a string starting with './' (3) make it an object with keys starting with a '.' and values of type string - starting with './'.`
    )
  }

  return packageJson as PackageJson
}

export { resolvePackageJson }
