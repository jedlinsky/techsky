import type { A, O } from 'ts-toolbelt'
import type { Simplify } from 'type-fest'
import type { Dependencies } from './resolveDependencies'
import type { Extensions } from './resolveExtensions'
import type { Files } from './resolveFiles'
import type { Format } from './resolveFormat'
import type { GitIgnorePatterns } from './resolveGitIgnorePatterns'
import type { Has } from './resolveHas'
import type { IgnorePatterns } from './resolveIgnorePatterns'
import type { PackageJson } from './resolvePackageJson'
import type { ParsedTSConfig, Paths } from './resolvePaths'
import type { Scope } from './resolveScope'
import type { ResolvedUserOptions, UserOptions } from './resolveUserOptions'

type AddedResolvedOptions = {
  readonly dependencies: Dependencies
  readonly extensions: Extensions
  readonly files: Files
  readonly format: Format
  readonly gitIgnorePatterns: GitIgnorePatterns
  readonly has: Has
  readonly ignorePatterns: IgnorePatterns
  readonly isMonorepo: boolean
  readonly isMonorepoRoot: boolean
  readonly isProjectRoot: boolean
  readonly isTurborepo: boolean
  readonly packageJson: PackageJson
  readonly parsedTSConfig: ParsedTSConfig
  readonly paths: Paths
  readonly resolvedUserOptions: ResolvedUserOptions
  readonly rootDependencies: Dependencies
  readonly rootPackageJson: PackageJson
  readonly scope: Scope
  readonly userOptions: UserOptions
}

type DefinedOptions = O.Required<Options, A.Key, 'deep'>

type Options =
  Omit<
    ResolvedUserOptions,
    'envPath' | 'mergePrettier' | 'nextJSAppDir' | 'nextJSPagesDir' | 'npmScope' | 'tsConfigPath'
  > extends infer TOmitted
    ? TOmitted extends object
      ? O.Required<TOmitted, 'prettier'> extends infer TRequiredPrettier
        ? TRequiredPrettier extends object
          ? Simplify<AddedResolvedOptions & TRequiredPrettier>
          : never
        : never
      : never
    : never

type CWD = string | undefined

type ResolveOptionsProps = {
  readonly cwd: CWD
  readonly eslintConfigPath: string
  readonly userOptions: UserOptions
}

type ResolveOptions = (props: ResolveOptionsProps) => Options

export type { DefinedOptions, Options, ResolveOptions }
