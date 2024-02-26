import type { Config } from 'resolvePrettierConfigSync/types.js'

type ConfigWithSchema = Config & {
  readonly $schema?: string
}

type ResolveConfigWithoutSchema = (config: ConfigWithSchema) => Config

type Result = {
  readonly config: unknown
  readonly filepath: string
  readonly isEmpty?: boolean
} | null

type Transform = (result: Result) => Result

export type { ConfigWithSchema, ResolveConfigWithoutSchema, Transform }
