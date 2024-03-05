import type { TsConfigJsonResolved as TSConfigJsonResolved } from 'get-tsconfig'
import type { DeepReadonly } from 'ts-essentials'
import type { Path } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { Base } from 'getConfig/resolveOptions/resolvePaths/resolveBase'
import type { Root } from 'getConfig/resolveOptions/resolvePaths/resolveRoot'

type TSConfig = Path<'withRoot'> | null

type ParsedTSConfigNonNullable = DeepReadonly<TSConfigJsonResolved> & {
  readonly display?: string
}

type ParsedTSConfig = ParsedTSConfigNonNullable | null

type ResolvedTSConfig = {
  readonly __parsedTSConfig: ParsedTSConfig
  readonly base: Base
  readonly tsConfig: TSConfig
  readonly tsConfigHasBaseUrl: boolean
  readonly tsConfigPaths: TSConfigPaths
}

type ResolveTSConfigProps = {
  readonly cwd: string
  readonly root: Root
  readonly tsConfigPath: string
}

type ResolveTSConfig = (props: ResolveTSConfigProps) => ResolvedTSConfig

type ResolveTSConfigPathProps = {
  readonly cwd: string
  readonly root: Root
  readonly tsConfigPath: string
}

type ResolveTSConfigPath = (props: ResolveTSConfigPathProps) => Path<'withRoot'>

type TSConfigPaths = readonly string[]

type CompilerOptions = ParsedTSConfigNonNullable['compilerOptions']

type ResolveTSConfigPathsProps = {
  readonly base: Base
  readonly compilerOptions: CompilerOptions
}

type ResolveTSConfigPaths = (props: ResolveTSConfigPathsProps) => TSConfigPaths

export type {
  ParsedTSConfig,
  ParsedTSConfigNonNullable,
  ResolvedTSConfig,
  ResolveTSConfig,
  ResolveTSConfigPath,
  ResolveTSConfigPaths,
  TSConfig,
  TSConfigPaths
}
