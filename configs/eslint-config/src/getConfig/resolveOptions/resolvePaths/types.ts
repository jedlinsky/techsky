import type { O } from 'ts-toolbelt'
import type { Simplify } from 'type-fest'
import type { PackageJson } from 'getConfig/resolveOptions/resolvePackageJson'
import type { ResolvedUserOptions } from 'getConfig/resolveOptions/resolveUserOptions'
import type { Base } from './resolveBase'
import type { Env } from './resolveEnv'
import type { ESLintConfig } from './resolveESLintConfig'
import type { GitIgnore, GitIgnoreWorkspace } from './resolveGitIgnore'
import type { NextJSApp } from './resolveNextJSApp'
import type { NextJSPages } from './resolveNextJSPages'
import type { PnpmWorkspaceConfig } from './resolvePnpmWorkspaceConfig'
import type { PrettierConfig } from './resolvePrettierConfig'
import type { Root } from './resolveRoot'
import type { ParsedTSConfig, TSConfig, TSConfigPaths } from './resolveTSConfig'
import type { TurboConfig } from './resolveTurboConfig'
import type { Workspaces } from './resolveWorkspaces'

type Paths = {
  readonly base: Base
  readonly cwd: string
  readonly env: Env
  readonly eslintConfig: ESLintConfig
  readonly gitIgnore: GitIgnore
  readonly gitIgnoreWorkspace: GitIgnoreWorkspace
  readonly nextJSApp: NextJSApp
  readonly nextJSPages: NextJSPages
  readonly pnpmWorkspaceConfig: PnpmWorkspaceConfig
  readonly prettierConfig: PrettierConfig
  readonly root: Root
  readonly tsConfig: TSConfig
  readonly tsConfigPaths: TSConfigPaths
  readonly turboConfig: TurboConfig
  readonly workspaces: Workspaces
}

type PathsWithParsedTSConfig = Paths & {
  readonly __parsedTSConfig: ParsedTSConfig
}

type ResolvePathsPropsPaths =
  Pick<
    ResolvedUserOptions,
    'baseUrl' | 'envPath' | 'nextJSAppDir' | 'nextJSPagesDir' | 'tsConfigPath'
  > extends infer TPicked
    ? TPicked extends object
      ? O.Undefinable<TPicked, 'baseUrl' | 'envPath'> extends infer TUndefinable
        ? TUndefinable extends object
          ? O.Required<TUndefinable, 'baseUrl' | 'envPath'> extends infer TRequired
            ? TRequired extends object
              ? TRequired
              : never
            : never
          : never
        : never
      : never
    : never

type ResolvePathsProps = Simplify<
  ResolvePathsPropsPaths & {
    readonly cwd: string
    readonly eslintConfigPath: string
    readonly rootPackageJson: PackageJson
  }
>

type ResolvePaths = (props: ResolvePathsProps) => PathsWithParsedTSConfig

export type { Paths, PathsWithParsedTSConfig, ResolvePaths }
