import { dirname } from 'node:path'
import { resolveDependencyPathForCJSBundle } from './resolveDependencyPathForCJSBundle.js'
import { resolveDependencyPathForRoot } from './resolveDependencyPathForRoot.js'
import type { ResolveDependencyPath } from './types.js'

const resolveDependencyPath: ResolveDependencyPath = function ({ cjsBundleEntryPath, cwd, dependency, type }) {
  const path =
    type === 'cjsBundle'
      ? resolveDependencyPathForCJSBundle({ cjsBundleEntryPath, dependency })
      : resolveDependencyPathForRoot({ cwd, dependency })

  if (path === null) {
    return null
  }

  return dirname(path)
}

export { resolveDependencyPath }
