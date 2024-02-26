import type { Paths } from 'getConfig/resolveOptions/resolvePaths'

type IsMonorepo = {
  readonly isMonorepo: boolean
  readonly isMonorepoRoot: boolean
}

type ResolveIsMonorepoProps = {
  readonly paths: Paths
}

type ResolveIsMonorepo = (props: ResolveIsMonorepoProps) => IsMonorepo

export type { ResolveIsMonorepo }
