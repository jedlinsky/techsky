import type { O } from 'ts-toolbelt'
import type { Simplify } from 'type-fest'
import type { Configs, LinterConfig } from './configs'
import type { UnextendedConfig } from './resolveExtend'
import type { Options, UserOptions } from './resolveOptions'

type Config =
  Simplify<Exclude<LinterConfig, keyof UnextendedConfig> & UnextendedConfig> extends infer TSimplified
    ? TSimplified extends object
      ? O.Undefinable<TSimplified, 'extends' | 'plugins' | 'root' | 'rules'> extends infer TUndefinable
        ? TUndefinable extends object
          ? O.Optional<TUndefinable, 'extends' | 'plugins' | 'rules'>
          : never
        : never
      : never
    : never

type GetConfigProps = {
  readonly cwd?: string
  readonly eslintConfigPath: string
  readonly userOptions: UserOptions
}

type GetConfig = (props: GetConfigProps) => Config

type GetConfigs = (options: Options) => Configs

type ResolvedConfig = O.Omit<UnextendedConfig, 'extends' | 'plugins' | 'rules'>

type ResolveConfig = (options: Options) => ResolvedConfig

export type { Config, GetConfig, GetConfigs, ResolveConfig, ResolvedConfig }
