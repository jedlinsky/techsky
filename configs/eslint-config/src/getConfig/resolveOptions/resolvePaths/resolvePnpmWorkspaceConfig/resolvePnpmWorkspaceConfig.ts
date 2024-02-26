import { getPathResolver } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { ResolvePnpmWorkspaceConfig } from './types'

const resolvePnpmWorkspaceConfig: ResolvePnpmWorkspaceConfig = function ({ cwd }) {
  const resolvePath = getPathResolver({ cwd })

  return resolvePath('./pnpm-workspace.yaml')
}

export { resolvePnpmWorkspaceConfig }
