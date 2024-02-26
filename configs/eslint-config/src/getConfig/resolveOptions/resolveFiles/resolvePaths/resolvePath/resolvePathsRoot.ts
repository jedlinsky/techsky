import { join } from 'node:path/posix'
import type { ResolvePathsRoot } from './types'

const resolvePathsRoot: ResolvePathsRoot = function ({ paths, pathsWithBase, resolvedResolverProps }) {
  return pathsWithBase.map((pathWithBase) => {
    if (resolvedResolverProps.withRoot) {
      return join(paths.root.relative, pathWithBase)
    }

    return pathWithBase
  })
}

export { resolvePathsRoot }
