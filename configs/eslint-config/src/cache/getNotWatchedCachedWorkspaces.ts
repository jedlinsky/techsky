import { getCachedWorkspaces } from './getCachedWorkspaces'
import { getWatchedWorkspaces } from './getWatchedWorkspaces'
import type { GetNotWatchedCachedWorkspaces } from './types'

const getNotWatchedCachedWorkspaces: GetNotWatchedCachedWorkspaces = function ({ cacheMap, watchedWorkspacesMap }) {
  const cachedWorkspaces = getCachedWorkspaces({ cacheMap })
  const watchedWorkspaces = getWatchedWorkspaces({ watchedWorkspacesMap })

  const filtered = cachedWorkspaces.filter((cachedWorkspace) => !watchedWorkspaces.includes(cachedWorkspace))

  if (filtered.length === 0) {
    return null
  }

  return filtered
}

export { getNotWatchedCachedWorkspaces }
