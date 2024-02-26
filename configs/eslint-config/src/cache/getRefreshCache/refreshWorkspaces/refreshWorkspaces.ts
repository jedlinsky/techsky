import { getIsFileEventName } from 'cache/getRefreshCache/getIsFileEventName'
import { refreshCacheInternalRefresh } from 'cache/getRefreshCache/refreshCacheInternalRefresh'
import { resolveFileType } from 'cache/resolveFileType'
import { getIsDirectoryRoot } from './getIsDirectoryRoot'
import { getWorkspacesToRefresh } from './getWorkspacesToRefresh'
import type { RefreshWorkspaces } from './types'

const refreshWorkspaces: RefreshWorkspaces = function ({
  cacheMap,
  cwd,
  eventName,
  fileContentHashMap,
  path,
  posixPath,
  watchedWorkspacesMap
}) {
  const isDirectoryRoot = getIsDirectoryRoot({ cwd, path })

  if (!isDirectoryRoot) {
    return
  }

  const isFileEventName = getIsFileEventName(eventName)

  if (!isFileEventName) {
    return
  }

  const fileType = resolveFileType({ path })

  if (fileType === 'tsConfig' || fileType === 'unknown') {
    return
  }

  const workspacesToRefresh = getWorkspacesToRefresh({ fileContentHashMap, fileType, watchedWorkspacesMap })

  if (workspacesToRefresh === null) {
    return
  }

  workspacesToRefresh.forEach(({ cacheKey, eslintConfigPath, userOptions }) => {
    refreshCacheInternalRefresh({
      cacheKey,
      cacheMap,
      cwd,
      eslintConfigPath,
      eventName,
      posixPath,
      refreshedFromRoot: true,
      userOptions
    })
  })
}

export { refreshWorkspaces }
