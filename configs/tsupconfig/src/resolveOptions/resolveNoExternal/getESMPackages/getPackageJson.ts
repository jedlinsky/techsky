import { readPackageUp } from 'read-package-up'
import type { GetPackageJson } from './types.js'

const getPackageJson: GetPackageJson = async function ({ dependencyPath }) {
  if (dependencyPath === null) {
    return null
  }

  try {
    return (await readPackageUp({ cwd: dependencyPath }))?.packageJson ?? null
  } catch {
    return null
  }
}

export { getPackageJson }
