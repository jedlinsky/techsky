import { getCache } from './getCache'
import { resolveExcludedFiles } from './resolveExcludedFiles'
import { resolveIsRootDirectory } from './resolveIsRootDirectory'
import type { ResolveIgnored } from './types'

const resolveIgnored: ResolveIgnored = function ({ cacheMap, cwdPosix }) {
  return function (path) {
    const isRootDirectory = resolveIsRootDirectory({ cwdPosix, path })

    if (isRootDirectory) {
      return false
    }

    const cache = getCache({ cacheMap, cwdPosix, isRootDirectory, path })

    if (!cache) {
      return false
    }

    const { isWorkspaceDirectory } = cache

    if (isWorkspaceDirectory) {
      return false
    }

    return resolveExcludedFiles({ cache, cwdPosix, path })
  }
}

export { resolveIgnored }
