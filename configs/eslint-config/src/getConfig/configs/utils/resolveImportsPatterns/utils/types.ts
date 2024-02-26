import type { Pattern, Patterns } from 'getConfig/configs/utils/resolveImportsPatterns/types'

type EndsWithPatternProps = {
  readonly pattern: Pattern
  readonly prependDot?: boolean
}

type EndsWithPattern = (props: EndsWithPatternProps) => Pattern

type ExactPatternProps = {
  readonly isSideEffect?: boolean
  readonly moduleName: string
}

type ExactPattern = (props: ExactPatternProps) => Pattern

type JoinModuleNames = (moduleNames: readonly string[]) => Pattern

type ModulePatternsProps = {
  readonly moduleName: string
  readonly scopeFirst?: boolean
  readonly withScope?: boolean
}

type ModulePatterns = (props: ModulePatternsProps) => Patterns

type NegativeLookaheadPattern = (pattern: Pattern) => Pattern

type OptionalPattern = (pattern: Pattern) => Pattern

type PositiveLookaheadPattern = (pattern: Pattern) => Pattern

type PrependStartPattern = (pattern: Pattern) => Pattern

type Regex = {
  readonly dot: string
  readonly forwardSlash: string
  readonly negativeLookahead: string
  readonly null: string
  readonly positiveLookahead: string
  readonly word: string
}

type RegexPattern = {
  readonly any: string
  readonly anyOrEnd: string
  readonly anyOrEndType: string
  readonly end: string
  readonly genericModules: string
  readonly nested: string
  readonly nestedOrEnd: string
  readonly nestedOrEndType: string
  readonly notAbsolute: string
  readonly notType: string
  readonly optionalJS: string
  readonly sideEffects: string
  readonly type: string
}

export type {
  EndsWithPattern,
  ExactPattern,
  JoinModuleNames,
  ModulePatterns,
  NegativeLookaheadPattern,
  OptionalPattern,
  PositiveLookaheadPattern,
  PrependStartPattern,
  Regex,
  RegexPattern
}
