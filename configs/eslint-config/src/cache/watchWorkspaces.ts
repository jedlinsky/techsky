import { getNotWatchedCachedWorkspaces } from './getNotWatchedCachedWorkspaces'
import type { WatchWorkspaces } from './types'

const watchWorkspaces: WatchWorkspaces = function ({ cacheMap, watchedWorkspacesMap, watcher }) {
  const notWatchedCachedWorkspaces = getNotWatchedCachedWorkspaces({ cacheMap, watchedWorkspacesMap })

  if (notWatchedCachedWorkspaces === null) {
    return
  }

  notWatchedCachedWorkspaces.forEach((notWatchedCachedWorkspace) => {
    const notWatchedCachedWorkspaceOptions = cacheMap.get(notWatchedCachedWorkspace)?.settings.__options

    if (notWatchedCachedWorkspaceOptions) {
      const { paths, userOptions } = notWatchedCachedWorkspaceOptions

      const eslintConfigPath = `./${paths.eslintConfig.relativeWithRoot}`

      watchedWorkspacesMap.set(notWatchedCachedWorkspace, { eslintConfigPath, userOptions })

      const base = `./${paths.base.relativeWithRoot}`

      if (notWatchedCachedWorkspace !== base) {
        // eslint-disable-next-line functional/no-expression-statements
        watcher.add(base)
      }
    }

    // eslint-disable-next-line functional/no-expression-statements
    watcher.add(notWatchedCachedWorkspace)
  })
}

export { watchWorkspaces }
