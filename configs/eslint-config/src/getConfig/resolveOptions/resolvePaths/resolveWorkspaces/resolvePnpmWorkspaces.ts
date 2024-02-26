import { getPnpmWorkspaces } from './getPnpmWorkspaces'
import { resolveWorkspacesPaths } from './resolveWorkspacesPaths'
import type { ResolvePnpmWorkspaces } from './types'

const resolvePnpmWorkspaces: ResolvePnpmWorkspaces = function ({ cwd, pnpmWorkspaceConfig }) {
  const workspaces = getPnpmWorkspaces({ pnpmWorkspaceConfig })

  if (workspaces === null) {
    return null
  }

  return resolveWorkspacesPaths({ cwd, workspaces })
}

export { resolvePnpmWorkspaces }
