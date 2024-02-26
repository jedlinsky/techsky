import resolvePackagePath from 'resolve-package-path'
import type { ResolveDependencyPathForRoot } from './types.js'

const resolveDependencyPathForRoot: ResolveDependencyPathForRoot = function ({ cwd, dependency }) {
  return resolvePackagePath(dependency, cwd)
}

export { resolveDependencyPathForRoot }
