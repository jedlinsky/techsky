import type { ResolvedConfig, ResolvedCosmiconfig } from 'resolvePrettierConfigSync/resolveConfig/loadConfig/types.js'
import type { Config } from 'resolvePrettierConfigSync/types.js'

// eslint-disable-next-line functional/prefer-readonly-type
type ConfigWithoutOverrides = {
  [TKey in keyof Config as TKey extends 'overrides' ? never : TKey]: Config[TKey]
}

type MergeConfigsProps = {
  readonly editorConfig: ResolvedConfig
  readonly filePath: string
  readonly prettierConfig: ResolvedCosmiconfig
}

type MergeConfigs = (props: MergeConfigsProps) => ConfigWithoutOverrides

type MergeOverrides = (cosmiconfigResult: ResolvedCosmiconfig, filePath: string) => ConfigWithoutOverrides

type PartitionReturnArray = readonly string[]

type PartitionReturn = readonly [withSlashes: PartitionReturnArray, withoutSlashes: PartitionReturnArray]

type PartitionPredicate = (value: string) => boolean

type PartitionArray = readonly string[]

type Partition = (array: PartitionArray, predicate: PartitionPredicate) => PartitionReturn

type PatternList = readonly string[]

type Patterns = string | readonly string[]

type Ignore = Patterns | undefined

type PathMatchesGlobs = (filePath: string, patterns: Patterns, ignore: Ignore) => boolean

type Overrides = Exclude<Config['overrides'], undefined>

type ResolveOverridesProps = {
  readonly configPath: string
  readonly filePath: string
  readonly options: ConfigWithoutOverrides
  readonly overrides: Overrides
}

type ResolveOverrides = (props: ResolveOverridesProps) => ConfigWithoutOverrides

export type {
  ConfigWithoutOverrides,
  MergeConfigs,
  MergeOverrides,
  Partition,
  PartitionReturn,
  PathMatchesGlobs,
  PatternList,
  ResolveOverrides
}
