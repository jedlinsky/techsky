import { join } from 'node:path/posix'
import type { ResolvePathsBase } from './types'

const resolvePathsBase: ResolvePathsBase = function ({ joinedPaths, paths, resolvedResolverProps }) {
  return joinedPaths.map((joinedPath) => {
    if (resolvedResolverProps.withBase) {
      return joinedPath.startsWith(paths.base.relative) ? joinedPath : join(paths.base.relative, joinedPath)
    }

    return joinedPath
  })
}

export { resolvePathsBase }
