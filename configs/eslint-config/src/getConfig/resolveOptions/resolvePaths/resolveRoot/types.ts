import type { Path } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { Workspaces } from 'getConfig/resolveOptions/resolvePaths/resolveWorkspaces'

type Root = Path<'common'>

type ResolveRootProps = {
  readonly cwd: string
  readonly eslintConfigPath: string
  readonly workspaces: Workspaces
}

type ResolveRoot = (props: ResolveRootProps) => Root

type SplitPath = (path: string) => readonly string[]

export type { ResolveRoot, Root, SplitPath }
