import type { Path } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'

type PnpmWorkspaceConfig = Path<'common'>

type ResolvePnpmWorkspaceConfigProps = {
  readonly cwd: string
}

type ResolvePnpmWorkspaceConfig = (props: ResolvePnpmWorkspaceConfigProps) => PnpmWorkspaceConfig

export type { PnpmWorkspaceConfig, ResolvePnpmWorkspaceConfig }
