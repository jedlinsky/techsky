import { joinSegments } from './joinSegments'
import type { ResolvePathsSegments } from './types'

const resolvePathsSegments: ResolvePathsSegments = function ({ extension, resolvedResolverProps }) {
  if (resolvedResolverProps.fileNames.length === 0) {
    const joinedSegments = joinSegments({ extension, resolvedResolverProps })

    return [joinedSegments]
  }

  return resolvedResolverProps.fileNames.map((fileName) => joinSegments({ extension, fileName, resolvedResolverProps }))
}

export { resolvePathsSegments }
