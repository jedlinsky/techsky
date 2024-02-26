import { resolvePnpmWorkspaces } from './resolvePnpmWorkspaces'
import { resolveWorkspacesPaths } from './resolveWorkspacesPaths'
import type { ResolveWorkspaces } from './types'

const resolveWorkspaces: ResolveWorkspaces = function ({ cwd, pnpmWorkspaceConfig, rootPackageJson }) {
  const { workspaces } = rootPackageJson

  if (!workspaces) {
    return resolvePnpmWorkspaces({ cwd, pnpmWorkspaceConfig })
  }

  if (workspaces.length === 0) {
    return null
  }

  return resolveWorkspacesPaths({ cwd, workspaces })
}

export { resolveWorkspaces }
