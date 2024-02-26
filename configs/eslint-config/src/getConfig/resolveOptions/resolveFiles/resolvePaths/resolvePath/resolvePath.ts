import { resolveCurrentDirectoryNotation } from './resolveCurrentDirectoryNotation'
import { resolvePathsBase } from './resolvePathsBase'
import { resolvePathsJoin } from './resolvePathsJoin'
import { resolvePathsRoot } from './resolvePathsRoot'
import { resolvePrependForwardSlash } from './resolvePrependForwardSlash'
import type { ResolvePath } from './types'

const resolvePath: ResolvePath = function ({ paths, resolvedPathsSegments, resolvedResolverProps }) {
  return function (path) {
    const joinedPaths = resolvePathsJoin({ path, resolvedPathsSegments, resolvedResolverProps })

    const pathsWithBase = resolvePathsBase({ joinedPaths, paths, resolvedResolverProps })

    const pathsWithRoot = resolvePathsRoot({ paths, pathsWithBase, resolvedResolverProps })

    const resolvedCurrentDirectoryNotation = resolveCurrentDirectoryNotation({
      paths: pathsWithRoot,
      resolvedResolverProps
    })

    return resolvePrependForwardSlash({ resolvedCurrentDirectoryNotation, resolvedResolverProps })
  }
}

export { resolvePath }
