import type { ResolveWorkspacesToRefresh } from './types'

const resolveWorkspacesToRefresh: ResolveWorkspacesToRefresh = function ({ filteredWatchedWorkspacesWithFileNames }) {
  return filteredWatchedWorkspacesWithFileNames.map(([cacheKey, { eslintConfigPath, userOptions }]) => {
    return {
      cacheKey,
      eslintConfigPath,
      userOptions
    }
  })
}

export { resolveWorkspacesToRefresh }
