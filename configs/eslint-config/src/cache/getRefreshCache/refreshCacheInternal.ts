import { getIsFileEventName } from './getIsFileEventName'
import { getIsTurboEventIgnored } from './getIsTurboEventIgnored'
import { refreshCacheInternalRefresh } from './refreshCacheInternalRefresh'
import { refreshWorkspaces } from './refreshWorkspaces'
import { resolveFileContentHash } from './resolveFileContentHash'
import type { RefreshCacheInternal } from './types'

const refreshCacheInternal: RefreshCacheInternal = function ({
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
}) {
  const isTurboEventIgnored = getIsTurboEventIgnored({ eventName, path })

  if (isTurboEventIgnored) {
    return
  }

  if (!acceptedEvents.includes(eventName)) {
    return
  }

  const isFileEventName = getIsFileEventName(eventName)

  if (isFileEventName) {
    const { isChanged } = resolveFileContentHash({ cacheKey, cwd, eventName, fileContentHashMap, path })

    if (!isChanged) {
      return
    }
  }

  refreshWorkspaces({ cacheMap, cwd, eventName, fileContentHashMap, path, posixPath, watchedWorkspacesMap })

  const { eslintConfigPath, userOptions } = watchedWorkspace

  refreshCacheInternalRefresh({ cacheKey, cacheMap, cwd, eslintConfigPath, eventName, posixPath, userOptions })
}

export { refreshCacheInternal }
