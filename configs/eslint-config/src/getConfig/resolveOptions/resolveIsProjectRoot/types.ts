import type { Paths } from 'getConfig/resolveOptions/resolvePaths'

type ResolveIsProjectRootProps = {
  readonly paths: Paths
}

type ResolveIsProjectRoot = (props: ResolveIsProjectRootProps) => boolean

export type { ResolveIsProjectRoot }
