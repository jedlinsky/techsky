type DefaultOptions = Required<RuleReactI18nNonNullable>

type Filter = readonly string[]

type ExcludeInclude = {
  readonly exclude?: Filter
  readonly include?: Filter
}

type ResolvedMode = 'all' | 'jsx-only' | 'jsx-text-only'

type ResolvedRuleReactI18nNonNullable = {
  readonly callees: ExcludeInclude
  readonly 'class-properties': ExcludeInclude
  readonly 'jsx-attributes': ExcludeInclude
  readonly 'jsx-components': ExcludeInclude
  readonly message: string
  readonly mode: ResolvedMode
  readonly 'object-properties': ExcludeInclude
  readonly 'should-validate-template': boolean
  readonly words: ExcludeInclude
}

type ResolvedRuleReactI18n = ResolvedRuleReactI18nNonNullable | null

type ResolveOptions = (props?: RuleReactI18nNonNullable) => ResolvedRuleReactI18nNonNullable

type ResolveOptionsExcludeIncludeKey =
  | 'callees'
  | 'classProperties'
  | 'jsxAttributes'
  | 'jsxComponents'
  | 'objectProperties'
  | 'words'

type ResolveOptionsExcludeInclude = (key: ResolveOptionsExcludeIncludeKey) => ExcludeInclude

type GetResolveOptionsExcludeIncludeProps = Pick<
  RuleReactI18nNonNullable,
  ResolveOptionsExcludeIncludeKey | 'mergeWithDefault'
>

type GetResolveOptionsExcludeInclude = (props: GetResolveOptionsExcludeIncludeProps) => ResolveOptionsExcludeInclude

type ResolveExcludeIncludeProps = {
  readonly defaultValue: ExcludeInclude
  readonly value: ExcludeInclude
}

type ResolveExcludeInclude = (props: ResolveExcludeIncludeProps) => ExcludeInclude

type ResolveOptionsMode = (mode: Mode) => ResolvedMode

type Mode = 'all' | 'jsxOnly' | 'jsxTextOnly'

type RuleReactI18nNonNullable = {
  readonly callees?: ExcludeInclude
  readonly classProperties?: ExcludeInclude
  readonly jsxAttributes?: ExcludeInclude
  readonly jsxComponents?: ExcludeInclude
  readonly mergeWithDefault?: boolean
  readonly message?: string
  readonly mode?: Mode
  readonly objectProperties?: ExcludeInclude
  readonly shouldValidateTemplate?: boolean
  readonly words?: ExcludeInclude
}

type RuleReactI18n = RuleReactI18nNonNullable | null

type ResolveRuleReactI18n = (props?: RuleReactI18n) => ResolvedRuleReactI18n

export type {
  DefaultOptions,
  GetResolveOptionsExcludeInclude,
  ResolvedRuleReactI18n,
  ResolveExcludeInclude,
  ResolveOptions,
  ResolveOptionsMode,
  ResolveRuleReactI18n,
  RuleReactI18n
}
