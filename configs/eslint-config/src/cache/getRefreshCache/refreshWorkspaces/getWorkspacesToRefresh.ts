import { filterWatchedWorkspacesWithFileNames } from './filterWatchedWorkspacesWithFileNames'
import { getWatchedWorkspacesWithFileNames } from './getWatchedWorkspacesWithFileNames'
import { resolveWorkspacesToRefresh } from './resolveWorkspacesToRefresh'
import type { GetWorkspacesToRefresh } from './types'

const getWorkspacesToRefresh: GetWorkspacesToRefresh = function ({
  fileContentHashMap,
  fileType,
  watchedWorkspacesMap
}) {
  const watchedWorkspacesWithFileNames = getWatchedWorkspacesWithFileNames({ fileContentHashMap, watchedWorkspacesMap })

  if (watchedWorkspacesWithFileNames === null) {
    return null
  }

  const filteredWatchedWorkspacesWithFileNames = filterWatchedWorkspacesWithFileNames({
    fileType,
    watchedWorkspacesWithFileNames
  })

  if (filteredWatchedWorkspacesWithFileNames === null) {
    return null
  }

  return resolveWorkspacesToRefresh({ filteredWatchedWorkspacesWithFileNames })
}

export { getWorkspacesToRefresh }
