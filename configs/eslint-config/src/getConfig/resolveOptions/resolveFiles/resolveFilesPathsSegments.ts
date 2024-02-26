import { resolvePaths } from './resolvePaths'
import type { ResolveFilesPathsSegments } from './types'

const resolveFilesPathsSegments: ResolveFilesPathsSegments = function ({
  paths,
  resolvedExtensions,
  resolvedResolverProps
}) {
  if (resolvedExtensions === null) {
    return resolvePaths({ extension: null, paths, resolvedResolverProps })
  }

  return resolvedExtensions.flatMap((extension) => resolvePaths({ extension, paths, resolvedResolverProps }))
}

export { resolveFilesPathsSegments }
