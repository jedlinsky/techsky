import type { Path, ResolvePath } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { Root } from 'getConfig/resolveOptions/resolvePaths/resolveRoot'

type PrettierConfig = Path<'withRoot'> | null

type ResolvePrettierConfigProps = {
  readonly cwd: string
  readonly resolvePath: ResolvePath
  readonly root: Root
}

type ResolvePrettierConfig = (props: ResolvePrettierConfigProps) => PrettierConfig

type RelativeWithRoot = {
  readonly relativeWithRoot: string
  readonly relativeWithRootSystem: string
}

type ResolveRelativeWithRootProps = {
  readonly absolute: string
  readonly cwd: string
  readonly fileName: string
  readonly resolvePath: ResolvePath
}

type ResolveRelativeWithRoot = (props: ResolveRelativeWithRootProps) => RelativeWithRoot

export type { PrettierConfig, ResolvePrettierConfig, ResolveRelativeWithRoot }
