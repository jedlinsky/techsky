import { resolveFileType } from 'cache/resolveFileType'
import type { FilterWatchedWorkspacesWithFileNames } from './types'

const filterWatchedWorkspacesWithFileNames: FilterWatchedWorkspacesWithFileNames = function ({
  fileType,
  watchedWorkspacesWithFileNames
}) {
  if (fileType !== 'prettier') {
    return watchedWorkspacesWithFileNames
  }

  const filteredWatchedWorkspacesWithFileNames = watchedWorkspacesWithFileNames.filter(
    ([_cacheKey, workspaceWithFileNames]) => {
      const hasPrettier = workspaceWithFileNames.fileNames.some(
        (fileName) => resolveFileType({ path: fileName }) === 'prettier'
      )

      return !hasPrettier
    }
  )

  if (filteredWatchedWorkspacesWithFileNames.length === 0) {
    return null
  }

  return filteredWatchedWorkspacesWithFileNames
}

export { filterWatchedWorkspacesWithFileNames }
