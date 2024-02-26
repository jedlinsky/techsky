import type { Dependencies } from 'getConfig/resolveOptions/resolveDependencies'
import type { Paths } from 'getConfig/resolveOptions/resolvePaths'

type ResolveIsTurborepoProps = {
  readonly isMonorepo: boolean
  readonly paths: Paths
  readonly rootDependencies: Dependencies
}

type ResolveIsTurborepo = (props: ResolveIsTurborepoProps) => boolean

export type { ResolveIsTurborepo }
