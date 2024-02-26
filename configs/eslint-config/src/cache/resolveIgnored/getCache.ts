import { join, relative } from 'node:path/posix'
import { resolveCacheKeyFromRelativePath } from './resolveCacheKeyFromRelativePath'
import type { GetCache } from './types'

const getCache: GetCache = function ({ cacheMap, cwdPosix, isRootDirectory, path }) {
  const relativePath = relative(cwdPosix, path)
  const relativePathUp = join(relativePath, '..')

  const cacheKey = resolveCacheKeyFromRelativePath({ isRootDirectory, relativePath: relativePathUp })
  const cacheKeyFallback = resolveCacheKeyFromRelativePath({ isRootDirectory, relativePath })

  const config = cacheMap.get(cacheKey)

  if (config) {
    return {
      config,
      isWorkspaceDirectory: false
    }
  }

  const configFallback = cacheMap.get(cacheKeyFallback)

  if (configFallback) {
    return {
      config: configFallback,
      isWorkspaceDirectory: true
    }
  }

  return null
}

export { getCache }
