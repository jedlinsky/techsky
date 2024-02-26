import type { Simplify } from 'type-fest'
import type { Config, Options, PickConfig, ResolvedConfig, UserOptions } from 'getConfig'

type Settings = {
  readonly __options: Options
}

type ConfigSettings = {
  readonly settings: Settings
}

type UnextendedConfig = Simplify<
  ConfigSettings &
    PickConfig<
      'env' | 'extends' | 'ignorePatterns' | 'overrides' | 'parserOptions' | 'plugins' | 'root' | 'rules' | 'settings'
    >
>

type ResolveExtendProps = {
  readonly config: ResolvedConfig
  readonly userOptions: UserOptions
}

type ResolveExtend = (props: ResolveExtendProps) => Config

type ResolveOverridesProps = {
  readonly config: ResolvedConfig
  readonly extend: Exclude<UserOptions['extend'], undefined>
}

type ResolveOverrides = (props: ResolveOverridesProps) => UnextendedConfig['overrides']

type ResolveOverridesRulesProps = {
  readonly extendRules: Config['rules'] | undefined
  readonly rules: Config['rules'] | undefined
}

type ResolveOverridesRules = (props: ResolveOverridesRulesProps) => Config['rules'] | null

export type { ResolveExtend, ResolveOverrides, ResolveOverridesRules, UnextendedConfig }
