import type { Paths } from 'getConfig'
import type { ResolvedResolverProps } from 'getConfig/resolveOptions/resolveFiles/types'

type Extension = string | null

type JoinSegmentsProps = {
  readonly extension: Extension
  readonly fileName?: string
  readonly resolvedResolverProps: ResolvedResolverProps
}

type JoinSegments = (props: JoinSegmentsProps) => string

type ResolvePathsProps = {
  readonly extension: Extension
  readonly paths: Paths
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolvePaths = (props: ResolvePathsProps) => readonly string[]

type ResolvePathsSegmentsProps = {
  readonly extension: Extension
  readonly resolvedResolverProps: ResolvedResolverProps
}

type ResolvePathsSegments = (props: ResolvePathsSegmentsProps) => readonly string[]

export type { JoinSegments, ResolvePaths, ResolvePathsSegments }
