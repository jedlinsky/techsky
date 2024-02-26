import { readPackageUp } from 'read-package-up'
import type { GetDependenciesFromRoot } from './types.js'

const getDependenciesFromRoot: GetDependenciesFromRoot = async function () {
  const packageUp = await readPackageUp()

  if (!packageUp) {
    return null
  }

  const { packageJson } = packageUp

  if (!('dependencies' in packageJson)) {
    return null
  }

  return Object.keys(packageJson.dependencies)
}

export { getDependenciesFromRoot }
