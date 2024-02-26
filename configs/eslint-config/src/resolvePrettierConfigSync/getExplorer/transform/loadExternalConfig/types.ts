import type { ConfigWithSchema } from 'resolvePrettierConfigSync/getExplorer/transform/types.js'

type IgnoredErrorCodes = readonly string[]

type LoadExternalConfig = (config: string, filePath: string) => ConfigWithSchema | null

type RequireFromFile = (id: string, filePath: string) => ConfigWithSchema

export type { ConfigWithSchema, IgnoredErrorCodes, LoadExternalConfig, RequireFromFile }
