import { resolvePath } from './resolvePath'
import { resolvePathsSegments } from './resolvePathsSegments'
import type { ResolvePaths } from './types'

const resolvePaths: ResolvePaths = function ({ extension, paths, resolvedResolverProps }) {
  const resolvedPathsSegments = resolvePathsSegments({ extension, resolvedResolverProps })

  return resolvedResolverProps.paths.flatMap(resolvePath({ paths, resolvedPathsSegments, resolvedResolverProps }))
}

export { resolvePaths }
