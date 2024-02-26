import { getPackageJson } from 'packageJson/index.js'
import type { GetDependencies } from './types.js'

const getDependencies: GetDependencies = function () {
  const packageJson = getPackageJson()

  const merged = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
    ...packageJson.peerDependencies
  }

  const keys = Object.keys(merged)

  return [...new Set(keys)]
}

export { getDependencies }
