import type { PackageJson } from 'getConfig'
import type { Paths } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { PnpmWorkspaceConfig } from 'getConfig/resolveOptions/resolvePaths/resolvePnpmWorkspaceConfig'

type PnpmWorkspacesNonNullable = readonly string[]

type PnpmWorkspaces = PnpmWorkspacesNonNullable | null

type PnpmWorkspacesFile = {
  readonly packages?: PnpmWorkspacesNonNullable
}

type GetPnpmWorkspacesProps = {
  readonly pnpmWorkspaceConfig: PnpmWorkspaceConfig
}

type GetPnpmWorkspaces = (props: GetPnpmWorkspacesProps) => PnpmWorkspaces

type WorkspacesNonNullable = Paths<'common'>

type Workspaces = WorkspacesNonNullable | null

type ResolvePnpmWorkspacesProps = {
  readonly cwd: string
  readonly pnpmWorkspaceConfig: PnpmWorkspaceConfig
}

type ResolvePnpmWorkspaces = (props: ResolvePnpmWorkspacesProps) => Workspaces

type ResolveWorkspacesProps = {
  readonly cwd: string
  readonly pnpmWorkspaceConfig: PnpmWorkspaceConfig
  readonly rootPackageJson: PackageJson
}

type ResolveWorkspaces = (props: ResolveWorkspacesProps) => Workspaces

type ResolveWorkspacesPathsProps = {
  readonly cwd: string
  readonly workspaces: Readonly<Exclude<PackageJson['workspaces'], undefined>>
}

type ResolveWorkspacesPaths = (props: ResolveWorkspacesPathsProps) => WorkspacesNonNullable

export type {
  GetPnpmWorkspaces,
  PnpmWorkspacesFile,
  ResolvePnpmWorkspaces,
  ResolveWorkspaces,
  ResolveWorkspacesPaths,
  Workspaces
}
