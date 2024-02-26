import type { ResolveConfigOptions as DefaultResolveConfigOptions } from 'prettier'
import type { ReadonlyDeep } from 'type-fest'
import type { Config } from 'resolvePrettierConfigSync/types.js'
import type { ResolvedCosmiconfig } from './loadConfig/types.js'
import type { ConfigWithoutOverrides } from './mergeConfigs/types.js'

type ResolvedConfig = Omit<Config, 'overrides'> | null

type Options = ReadonlyDeep<DefaultResolveConfigOptions>

type ResolveConfig = (filePath: string, options?: Options | undefined) => ResolvedConfig

type ResolvedConfigOptions = Omit<Options, 'useCache'> & {
  readonly useCache: boolean
}

type ResolveConfigOptions = (options: Options | undefined) => ResolvedConfigOptions

type ResolveConfigPlugins = (
  config: ConfigWithoutOverrides,
  prettierConfig: ResolvedCosmiconfig
) => ConfigWithoutOverrides

export type { ResolveConfig, ResolveConfigOptions, ResolveConfigPlugins, ResolvedConfig, ResolvedConfigOptions }
