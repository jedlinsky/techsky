import type { Options } from 'prettier'
import type { DeepReadonly } from 'ts-essentials'
import type { Paths } from 'getConfig/resolveOptions/resolvePaths'

type PrettierNonNullable = DeepReadonly<Options>

type Prettier = PrettierNonNullable | null

type ResolvePrettierProps = {
  readonly mergePrettier: boolean
  readonly paths: Paths
  readonly prettier: Prettier | undefined
}

type ResolvePrettier = (props: ResolvePrettierProps) => Prettier

type ResolvePrettierConfigProps = {
  readonly paths: Paths
}

type ResolvePrettierConfig = (props: ResolvePrettierConfigProps) => Prettier

export type { Prettier, ResolvePrettier, ResolvePrettierConfig }
