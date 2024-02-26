import { getCacheInternal } from './getCacheInternal'
import { getCacheKey } from './getCacheKey'
import { getConfigFileName } from './getConfigFileName'
import { getMessage } from './getMessage'
import { getSetCache } from './getSetCache'
import { updateWatchedWorkspacesUserOptions } from './updateWatchedWorkspacesUserOptions'
import { watchWorkspaces } from './watchWorkspaces'
import type { CacheGetter } from './types'

const cacheGetter: CacheGetter = function ({
  cacheMap,
  fileContentHashMap,
  userOptionsMap,
  watchedWorkspacesMap,
  watcher
}) {
  return function ({ eslintConfigPath, userOptions }) {
    watchWorkspaces({ cacheMap, watchedWorkspacesMap, watcher })

    const cacheKey = getCacheKey({ eslintConfigPath })

    updateWatchedWorkspacesUserOptions({ cacheKey, userOptions, watchedWorkspacesMap })

    const cache = getCacheInternal({ cacheKey, cacheMap, userOptions, userOptionsMap })

    const configFileName = getConfigFileName({ eslintConfigPath })

    const message = getMessage({
      cacheKey,
      configFileName,
      type: cacheMap.has(cacheKey) ? 'refreshedConfigFile' : 'loaded'
    })

    const setCache = getSetCache({ cacheKey, cacheMap })

    return {
      cache,
      fileContentHashMap,
      message,
      setCache
    }
  }
}

export { cacheGetter }
