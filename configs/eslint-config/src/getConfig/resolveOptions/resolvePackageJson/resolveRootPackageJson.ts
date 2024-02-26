import { getPackageJson } from './getPackageJson'
import type { ResolveRootPackageJson } from './types'

const resolveRootPackageJson: ResolveRootPackageJson = function ({ cwd }) {
  return getPackageJson({ directoryPath: cwd })
}

export { resolveRootPackageJson }
