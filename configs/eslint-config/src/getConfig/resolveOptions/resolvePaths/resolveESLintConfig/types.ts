import type { Path, ResolvePath } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { Workspaces } from 'getConfig/resolveOptions/resolvePaths/resolveWorkspaces'

type ResolveConfigPathProps = {
  readonly eslintConfigPath: string
  readonly workspaces: Workspaces
}

type ResolveConfigPath = (props: ResolveConfigPathProps) => string

type ResolveConfigPathRelativeProps = {
  readonly fileName: string
  readonly withoutFileName: string
  readonly workspaces: Workspaces
}

type ResolveConfigPathRelative = (props: ResolveConfigPathRelativeProps) => string

type ESLintConfig = Path<'withRoot'>

type ResolveESLintConfigProps = {
  readonly eslintConfigPath: string
  readonly resolvePath: ResolvePath
  readonly workspaces: Workspaces
}

type ResolveESLintConfig = (props: ResolveESLintConfigProps) => ESLintConfig

export type { ESLintConfig, ResolveConfigPath, ResolveConfigPathRelative, ResolveESLintConfig }
