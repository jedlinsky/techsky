import { dirname } from 'node:path/posix'
import type { GetWorkspaceDirectoryPath } from './types'

const getWorkspaceDirectoryPath: GetWorkspaceDirectoryPath = function ({ path }) {
  return dirname(path)
}

export { getWorkspaceDirectoryPath }
