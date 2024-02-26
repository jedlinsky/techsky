import type { Options } from 'getConfig'

type Pattern = string

type Patterns = readonly Pattern[]

type GetPatterns = (options: Options) => Patterns

type ResolveImportsPatterns = (options: Options) => Patterns

export type { GetPatterns, Pattern, Patterns, ResolveImportsPatterns }
