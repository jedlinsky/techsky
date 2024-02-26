import fg from 'fast-glob'
import { resolvePaths } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { ResolveWorkspacesPaths } from './types'

const resolveWorkspacesPaths: ResolveWorkspacesPaths = function ({ cwd, workspaces }) {
  // eslint-disable-next-line functional/prefer-readonly-type
  const paths = fg.sync(workspaces as string[], { cwd, onlyDirectories: true })

  return resolvePaths({ cwd, paths })
}

export { resolveWorkspacesPaths }
