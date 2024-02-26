import type { Path, ResolvePath } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { ResolvedUserOptions } from 'getConfig/resolveOptions/resolveUserOptions'

type NextJSPages = Path<'withBase' | 'withRoot'> | null

type ResolveNextJSPagesProps = {
  readonly nextJSPagesDir: ResolvedUserOptions['nextJSPagesDir']
  readonly resolvePath: ResolvePath
}

type ResolveNextJSPages = (props: ResolveNextJSPagesProps) => NextJSPages

export type { NextJSPages, ResolveNextJSPages }
