import { isDeepStrictEqual } from 'node:util'
import { getPathResolver } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import { splitPath } from './splitPath'
import type { ResolveRoot } from './types'

const resolveRoot: ResolveRoot = function ({ cwd, eslintConfigPath, workspaces }) {
  const resolvePath = getPathResolver({ cwd })

  if (!workspaces) {
    return resolvePath('./')
  }

  const splittedWorkspaces = workspaces.relative.map(splitPath)
  const splittedESLintConfigPath = splitPath(eslintConfigPath)

  const workspaceIndex = splittedWorkspaces.findIndex((splittedWorkspace) =>
    isDeepStrictEqual(splittedWorkspace, splittedESLintConfigPath)
  )

  const path = workspaces.relative[workspaceIndex] ?? './'

  return resolvePath(path)
}

export { resolveRoot }
