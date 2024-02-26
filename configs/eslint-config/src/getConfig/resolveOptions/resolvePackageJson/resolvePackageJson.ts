import { getPackageJson } from './getPackageJson'
import type { ResolvePackageJson } from './types'

const resolvePackageJson: ResolvePackageJson = function ({ paths, rootPackageJson }) {
  if (paths.root.relative === './') {
    return rootPackageJson
  }

  return getPackageJson({ directoryPath: paths.root.absolute })
}

export { resolvePackageJson }
