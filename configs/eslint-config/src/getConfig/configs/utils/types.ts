import type { Options } from 'getConfig'

type NamingConventionCustom = {
  readonly match: boolean
  readonly regex: string
}

type NamingConventionFilter = {
  readonly match: boolean
  readonly regex: string
}

type NamingConvetionCommonOption = {
  readonly custom?: NamingConventionCustom
  readonly filter?: NamingConventionFilter
  readonly format: readonly string[] | null
  readonly leadingUnderscore?: string
  readonly modifiers?: readonly string[]
  readonly prefix?: readonly string[]
  readonly selector: string
}

type NamingConvetionCommonOptions = readonly NamingConvetionCommonOption[]

type GetNamingConvetionCommonOptions = (options: Options) => NamingConvetionCommonOptions

type PreventAbbreviationsOptions = {
  readonly allowList?: Record<string, boolean>
  readonly checkDefaultAndNamespaceImports: boolean
  readonly checkShorthandImports: boolean
  readonly ignore?: readonly (RegExp | string)[]
  readonly replacements: Record<string, boolean>
}

type PreventAbbreviations = readonly ['error', PreventAbbreviationsOptions]

type GetPreventAbbreviations = (options: Options) => PreventAbbreviations

type ReactExhaustiveDepsOptions = {
  readonly additionalHooks: string
}

type ReactExhaustiveDeps = readonly ['error', ReactExhaustiveDepsOptions] | 'error'

type GetReactExhaustiveDeps = (options: Options) => ReactExhaustiveDeps

type JsonOrder = {
  readonly caseSensitive: boolean
  readonly natural: boolean
  readonly type: 'asc' | 'desc'
}

type NoUnusedVars = {
  readonly argsIgnorePattern: string
  readonly caughtErrors: string
  readonly destructuredArrayIgnorePattern: string
  readonly ignoreRestSiblings: boolean
}

type PaddingLineBetweenStatement = {
  readonly blankLine: 'always' | 'never'
  readonly next: string | readonly string[]
  readonly prev: string | readonly string[]
}

type PaddingLineBetweenStatements = readonly PaddingLineBetweenStatement[]

type ResolveJSXPropAllowList = (options: Options) => readonly string[] | null

type ResolveNamingConventionExclude = (options: Options) => string | null

type PreventAbbreviationsAllowList = Record<string, true>

type ResolvePreventAbbreviationsAllowList = (options: Options) => PreventAbbreviationsAllowList | null

type ShortAllowedNames = readonly string[]

type TSAllowedReactNamingRegex = string

export type {
  GetNamingConvetionCommonOptions,
  GetPreventAbbreviations,
  GetReactExhaustiveDeps,
  JsonOrder,
  NoUnusedVars,
  PaddingLineBetweenStatements,
  ResolveJSXPropAllowList,
  ResolveNamingConventionExclude,
  ResolvePreventAbbreviationsAllowList,
  ShortAllowedNames,
  TSAllowedReactNamingRegex
}
