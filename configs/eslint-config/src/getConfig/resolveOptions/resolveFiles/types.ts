import type { O } from 'ts-toolbelt'
import type { Extensions, Has, Paths, ResolvedUserOptions } from 'getConfig'
import type { GitIgnorePatterns } from 'getConfig/resolveOptions/resolveGitIgnorePatterns'

type ResolverProps = {
  readonly extensions?: readonly string[] | null
  readonly fileNames?: readonly string[]
  readonly includeJavaScriptWhenTypeScript?: boolean
  readonly includeJson?: boolean
  readonly includeReact?: boolean
  readonly paths?: readonly string[] | null
  readonly prependCurrentDirectoryNotation?: boolean
  readonly prependForwardSlash?: boolean
  readonly segments: readonly string[] | null
  readonly withBase?: boolean
  readonly withRoot?: boolean
}

type ResolvePathReturnType<TResolverProps extends ResolverProps> =
  O.Has<TResolverProps, 'paths', null> extends 0 ? readonly string[] : readonly string[] | null

type FilesPathResolver = <TResolverProps extends ResolverProps>(
  props: TResolverProps
) => ResolvePathReturnType<TResolverProps>

type GetFilesPathsResolverProps = {
  readonly extensions: Extensions
  readonly has: Has
  readonly paths: Paths
}

type GetFilesPathsResolver = (props: GetFilesPathsResolverProps) => FilesPathResolver

type ResolvedExtensions = readonly string[] | null

type ResolveExtensionsProps = {
  readonly extensions: Extensions
  readonly has: Has
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolveExtensions = (props: ResolveExtensionsProps) => ResolvedExtensions

type Files = {
  readonly all: readonly string[]
  readonly allAtBase: readonly string[]
  readonly common: readonly string[]
  readonly commonAtBase: readonly string[]
  readonly commonAtBaseResolved: readonly string[]
  readonly commonJS: readonly string[]
  readonly commonResolved: readonly string[]
  readonly commonWithJson: readonly string[]
  readonly declarations: readonly string[]
  readonly env: readonly string[] | null
  readonly ignorePatterns: readonly string[]
  readonly javascript: readonly string[]
  readonly json: readonly string[]
  readonly jsonc: readonly string[]
  readonly meta: readonly string[]
  readonly nextJSApp: readonly string[] | null
  readonly nextJSPages: readonly string[] | null
  readonly nextJSPagesDirs: readonly string[] | null
  readonly noSecretsExclude: readonly string[] | null
  readonly packageJson: readonly string[]
  readonly packageLockJson: readonly string[]
  readonly react: readonly string[]
  readonly reactTypeScript: readonly string[]
  readonly root: readonly string[]
  readonly standardTypeScript: readonly string[]
  readonly test: readonly string[]
  readonly turboConfig: readonly string[]
  readonly typescript: readonly string[]
  readonly typescriptAtBase: readonly string[]
}

type ResolveFilesProps = {
  readonly extensions: Extensions
  readonly gitIgnorePatterns: GitIgnorePatterns
  readonly has: Has
  readonly isMonorepoRoot: boolean
  readonly paths: Paths
  readonly rules: ResolvedUserOptions['rules']
}

type ResolveFiles = (props: ResolveFilesProps) => Files

type ResolveFilesPathsProps = {
  readonly extensions: Extensions
  readonly has: Has
  readonly paths: Paths
  readonly resolverProps: ResolverProps
}

type ResolveFilesPathsSegmentsProps = {
  readonly paths: Paths
  readonly resolvedExtensions: ResolvedExtensions
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolveFilesPathsSegments = (props: ResolveFilesPathsSegmentsProps) => readonly string[]

type ResolvedIgnorePatternsPaths = readonly string[]

type ResolveIgnorePatternsPathsProps = {
  readonly extensions: Extensions
  readonly gitIgnorePatterns: GitIgnorePatterns
  readonly isMonorepoRoot: boolean
  readonly paths: Paths
}

type ResolveIgnorePatternsPaths = (props: ResolveIgnorePatternsPathsProps) => ResolvedIgnorePatternsPaths

type ResolvedResolverProps = O.Compulsory<
  ResolverProps,
  'fileNames' | 'includeJavaScriptWhenTypeScript' | 'paths' | 'prependCurrentDirectoryNotation' | 'prependForwardSlash'
>

type ResolveResolverPropsProps = {
  readonly resolverProps: ResolverProps
}

type ResolveResolverProps = (props: ResolveResolverPropsProps) => ResolvedResolverProps

export type {
  Files,
  GetFilesPathsResolver,
  ResolvedResolverProps,
  ResolveExtensions,
  ResolveFiles,
  ResolveFilesPathsProps,
  ResolveFilesPathsSegments,
  ResolveIgnorePatternsPaths,
  ResolvePathReturnType,
  ResolveResolverProps,
  ResolverProps
}
