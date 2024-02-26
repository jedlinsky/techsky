import { getAcceptedEvents } from './getAcceptedEvents'
import { getCache } from './getCache'
import { getPosixPath } from './getPosixPath'
import { getWatchedWorkspace } from './getWatchedWorkspace'
import { refreshCacheInternal } from './refreshCacheInternal'
import type { GetRefreshCache } from './types'

const getRefreshCache: GetRefreshCache = function ({ cacheMap, cwd, fileContentHashMap, watchedWorkspacesMap }) {
  return function (eventName, path) {
    const posixPath = getPosixPath({ path })

    const cache = getCache({ cacheMap, posixPath })

    if (cache === null) {
      return
    }

    const { cacheKey, config } = cache

    const watchedWorkspace = getWatchedWorkspace({ cacheKey, watchedWorkspacesMap })

    if (watchedWorkspace === null) {
      return
    }

    const acceptedEvents = getAcceptedEvents({ config, posixPath })

    refreshCacheInternal({
      acceptedEvents,
      cacheKey,
      cacheMap,
      cwd,
      eventName,
      fileContentHashMap,
      path,
      posixPath,
      watchedWorkspace,
      watchedWorkspacesMap
    })
  }
}

export { getRefreshCache }
