import type { GetCachedWorkspaces } from './types'

const getCachedWorkspaces: GetCachedWorkspaces = function ({ cacheMap }) {
  return [...cacheMap.keys()]
}

export { getCachedWorkspaces }
