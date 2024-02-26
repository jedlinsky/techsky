import type { OutDir } from 'resolveOptions/types.js'
import type { ConfigOptions } from 'types.js'

type Copy = readonly Exclude<Exclude<ConfigOptions['copy'], undefined>[number], string | readonly string[]>[] | null

type ResolveCopyProps = {
  readonly copy: ConfigOptions['copy']
  readonly outDir: OutDir
}

type ResolveCopy = (props: ResolveCopyProps) => Copy

type ResolvePathProps = {
  readonly path: string | readonly string[]
  readonly prepend?: string
}

type ResolvePath = <TProps extends ResolvePathProps>(props: TProps) => TProps['path']

type ResolvePathCurrentDirectoryNotation = (path: string) => string

type ResolvePathInnerProps = {
  readonly path: string
  readonly prepend: string | undefined
}

type ResolvePathInner = (props: ResolvePathInnerProps) => string

type ResolvePathPrepend = (path: string, prepend: string | undefined) => string

export type {
  Copy,
  ResolveCopy,
  ResolvePath,
  ResolvePathCurrentDirectoryNotation,
  ResolvePathInner,
  ResolvePathPrepend
}
