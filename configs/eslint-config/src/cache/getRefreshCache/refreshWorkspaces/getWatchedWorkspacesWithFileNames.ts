import type { GetWatchedWorkspacesWithFileNames, WatchedWorkspacesWithFileNamesNonNullable } from './types'

const getWatchedWorkspacesWithFileNames: GetWatchedWorkspacesWithFileNames = function ({
  fileContentHashMap,
  watchedWorkspacesMap
}) {
  const workspaces = [...watchedWorkspacesMap.entries()] as const
  const workspacesWithoutRoot = workspaces.filter(([cacheKey]) => cacheKey !== '.')

  if (workspacesWithoutRoot.length === 0) {
    return null
  }

  const watchedWorkspacesWithFileNames = workspacesWithoutRoot.reduce<WatchedWorkspacesWithFileNamesNonNullable>(
    (accumulator, [cacheKey, watchedWorkspace]) => {
      const fileContentHashes = fileContentHashMap.get(cacheKey)

      if (!fileContentHashes) {
        return accumulator
      }

      const fileNames = Object.keys(fileContentHashes)

      if (fileNames.length === 0) {
        return accumulator
      }

      return [...accumulator, [cacheKey, { ...watchedWorkspace, fileNames }]]
    },
    []
  )

  if (watchedWorkspacesWithFileNames.length === 0) {
    return null
  }

  return watchedWorkspacesWithFileNames
}

export { getWatchedWorkspacesWithFileNames }
