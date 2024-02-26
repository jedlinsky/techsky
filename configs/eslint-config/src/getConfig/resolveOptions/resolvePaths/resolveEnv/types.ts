import type { Path, ResolvePath } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'

type Env = Path<'withRoot'> | null

type ResolveEnvProps = {
  readonly envPath: string | undefined
  readonly resolvePath: ResolvePath
}

type ResolveEnv = (props: ResolveEnvProps) => Env

export type { Env, ResolveEnv }
