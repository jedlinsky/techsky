import type { ResolvedConfig } from 'resolvePrettierConfigSync/resolveConfig/loadConfig/types.js'
import type { ResolvedConfigOptions } from 'resolvePrettierConfigSync/resolveConfig/types.js'

type LoadEditorConfig = (filePath: string, options: ResolvedConfigOptions) => ResolvedConfig

type LoadEditorConfigUnmemoized = (filePath: string) => ResolvedConfig

export type { LoadEditorConfig, LoadEditorConfigUnmemoized }
