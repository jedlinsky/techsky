import type { Paths } from 'getConfig'
import type { ResolvedResolverProps } from 'getConfig/resolveOptions/resolveFiles/types'

type ResolveCurrentDirectoryNotationProps = {
  readonly paths: readonly string[]
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolveCurrentDirectoryNotation = (props: ResolveCurrentDirectoryNotationProps) => readonly string[]

type ResolvePathProps = {
  readonly paths: Paths
  readonly resolvedPathsSegments: readonly string[]
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolvePath = (props: ResolvePathProps) => (path: string) => readonly string[]

type ResolvePathsBaseProps = {
  readonly joinedPaths: readonly string[]
  readonly paths: Paths
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolvePathsBase = (props: ResolvePathsBaseProps) => readonly string[]

type ResolvePathsJoinProps = {
  readonly path: string
  readonly resolvedPathsSegments: readonly string[]
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolvePathsJoin = (props: ResolvePathsJoinProps) => readonly string[]

type ResolvePathsRootProps = {
  readonly paths: Paths
  readonly pathsWithBase: readonly string[]
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolvePathsRoot = (props: ResolvePathsRootProps) => readonly string[]

type ResolvePrependForwardSlashProps = {
  readonly resolvedCurrentDirectoryNotation: readonly string[]
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolvePrependForwardSlash = (props: ResolvePrependForwardSlashProps) => readonly string[]

export type {
  ResolveCurrentDirectoryNotation,
  ResolvePath,
  ResolvePathsBase,
  ResolvePathsJoin,
  ResolvePathsRoot,
  ResolvePrependForwardSlash
}
