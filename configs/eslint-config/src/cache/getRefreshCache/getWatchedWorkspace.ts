import type { GetWatchedWorkspace } from './types'

const getWatchedWorkspace: GetWatchedWorkspace = function ({ cacheKey, watchedWorkspacesMap }) {
  return watchedWorkspacesMap.get(cacheKey) ?? null
}

export { getWatchedWorkspace }
