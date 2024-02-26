import type { Path } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'

type TurboConfig = Path<'common'>

type ResolveTurboConfig = () => TurboConfig

export type { ResolveTurboConfig, TurboConfig }
