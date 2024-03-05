import type { ResolvedUserOptions } from 'getConfig/resolveOptions/resolveUserOptions'

type IgnorePatterns = readonly string[] | null

type ResolveIgnorePatternsProps = {
  readonly ignore: ResolvedUserOptions['ignore']
}

type ResolveIgnorePatterns = (props: ResolveIgnorePatternsProps) => IgnorePatterns

type ResolvePath = (path: string) => string | null

export type { IgnorePatterns, ResolveIgnorePatterns, ResolvePath }
