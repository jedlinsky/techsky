import type { GetWatchedWorkspaces } from './types'

const getWatchedWorkspaces: GetWatchedWorkspaces = function ({ watchedWorkspacesMap }) {
  return [...watchedWorkspacesMap.keys()]
}

export { getWatchedWorkspaces }
