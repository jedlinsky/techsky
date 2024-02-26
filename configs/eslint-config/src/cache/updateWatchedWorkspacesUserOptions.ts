import type { UpdateWatchedWorkspacesUserOptions } from './types'

const updateWatchedWorkspacesUserOptions: UpdateWatchedWorkspacesUserOptions = function ({
  cacheKey,
  userOptions,
  watchedWorkspacesMap
}) {
  const watchedWorkspace = watchedWorkspacesMap.get(cacheKey)

  if (!watchedWorkspace) {
    return
  }

  watchedWorkspacesMap.set(cacheKey, { ...watchedWorkspace, userOptions })
}

export { updateWatchedWorkspacesUserOptions }
