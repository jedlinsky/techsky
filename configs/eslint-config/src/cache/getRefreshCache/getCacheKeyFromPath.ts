import { join } from 'node:path/posix'
import { getWorkspaceDirectoryPath } from './getWorkspaceDirectoryPath'
import { resolveCacheKey } from './resolveCacheKey'
import type { GetCacheKeyFromPath } from './types'

const getCacheKeyFromPath: GetCacheKeyFromPath = function ({ posixPath }) {
  const posixPathFallback = join(posixPath, '..')

  const workspaceDirectoryPath = getWorkspaceDirectoryPath({ path: posixPath })
  const workspaceDirectoryPathFallback = getWorkspaceDirectoryPath({ path: posixPathFallback })

  return {
    cacheKey: resolveCacheKey({ workspaceDirectoryPath }),
    cacheKeyFallback: resolveCacheKey({ workspaceDirectoryPath: workspaceDirectoryPathFallback })
  }
}

export { getCacheKeyFromPath }
