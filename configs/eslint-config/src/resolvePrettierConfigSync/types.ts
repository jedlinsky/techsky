import type { Config as DefaultConfig } from 'prettier'
import type { ReadonlyDeep } from 'type-fest'

type Config = ReadonlyDeep<DefaultConfig>

type ClearCache = () => void

type ResolvedConfigFile = string | null

type ResolveConfigFile = (filePath?: string) => ResolvedConfigFile

export type { ClearCache, Config, ResolveConfigFile }
