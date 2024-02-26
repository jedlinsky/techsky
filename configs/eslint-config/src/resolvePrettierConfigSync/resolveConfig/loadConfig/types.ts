import type { CosmiconfigResult } from 'cosmiconfig'
import type { ResolvedConfigOptions } from 'resolvePrettierConfigSync/resolveConfig/types.js'
import type { Config } from 'resolvePrettierConfigSync/types.js'

type ResolvedConfig = Config | null

type LoadedConfig = {
  readonly editorConfig: ResolvedConfig
  readonly prettierConfig: ResolvedCosmiconfig
}

type LoadConfig = (filePath: string, resolvedConfigOptions: ResolvedConfigOptions) => LoadedConfig

type ResolvedCosmiconfig = Readonly<
  Omit<Exclude<CosmiconfigResult, null>, 'config'> & {
    readonly config: ResolvedConfig
  }
> | null

type LoadPrettierConfig = (filePath: string, resolvedConfigOptions: ResolvedConfigOptions) => ResolvedCosmiconfig

export type { LoadConfig, LoadPrettierConfig, ResolvedConfig, ResolvedCosmiconfig }
