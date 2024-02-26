import type { Path, ResolvePath } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { ResolvedUserOptions } from 'getConfig/resolveOptions/resolveUserOptions'

type NextJSApp = Path<'withBase' | 'withRoot'> | null

type ResolveNextJSAppProps = {
  readonly nextJSAppDir: ResolvedUserOptions['nextJSAppDir']
  readonly resolvePath: ResolvePath
}

type ResolveNextJSApp = (props: ResolveNextJSAppProps) => NextJSApp

export type { NextJSApp, ResolveNextJSApp }
