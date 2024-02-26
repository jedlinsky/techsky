import { join } from 'node:path/posix'
import type { ResolvePathsJoin } from './types'

const resolvePathsJoin: ResolvePathsJoin = function ({ path, resolvedPathsSegments, resolvedResolverProps }) {
  const lastPathSegment = path.split('/').at(-1)
  const lastPathSegmentHasExtension = lastPathSegment?.at(-3) === '.' || lastPathSegment?.at(-4) === '.'

  if (lastPathSegmentHasExtension) {
    const resolvedPathJoin = path.startsWith('./') ? path.slice(2) : path

    return [resolvedPathJoin]
  }

  return resolvedPathsSegments.map((resolvedPathSegments) => {
    if (resolvedResolverProps.segments) {
      return `${join(path, resolvedPathSegments)}`
    }

    return `${path}${resolvedPathSegments}`
  })
}

export { resolvePathsJoin }
