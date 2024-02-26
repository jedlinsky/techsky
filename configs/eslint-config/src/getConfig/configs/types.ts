import type { Linter } from 'eslint'
import type { DeepReadonly } from 'ts-essentials'
import type { O } from 'ts-toolbelt'
import type { Simplify } from 'type-fest'
import type { Options } from 'getConfig'

type _LinterConfig =
  DeepReadonly<Linter.Config> extends infer TReadonly
    ? O.Update<TReadonly extends O.Object ? TReadonly : never, 'extends' | 'ignorePatterns', readonly string[]>
    : never

type Rules = {
  readonly [TKey: string]: Linter.RuleLevel | readonly [Linter.RuleLevel, ...Partial<readonly unknown[]>] | undefined
}

type Override = Omit<Exclude<_LinterConfig['overrides'], undefined>[number], 'rules'> & {
  readonly rules?: Rules
}

type LinterConfig = Omit<_LinterConfig, 'overrides' | 'rules'> & {
  readonly overrides?: readonly Override[]
  readonly rules?: Rules
}

type DefinedConfig = {
  readonly [TKey in keyof LinterConfig]-?: Exclude<LinterConfig[TKey], undefined>
}

type PickConfig<TPick extends keyof DefinedConfig = keyof DefinedConfig, TOptional extends TPick = never> = (
  Pick<DefinedConfig, TPick> extends infer TPicked
    ? TPicked extends object
      ? readonly [TOptional] extends readonly [never]
        ? TPicked
        : O.Optional<TPicked, TOptional>
      : never
    : never
) extends infer TResult
  ? TResult extends object
    ? Simplify<TResult>
    : never
  : never

type GetConfig<TPick extends keyof DefinedConfig = keyof DefinedConfig, TOptional extends TPick = never> = (
  options: Options
) => PickConfig<TPick, TOptional>

type GetComments = GetConfig<'overrides'>

type GetCommon = GetConfig<'env' | 'ignorePatterns' | 'parserOptions' | 'root'>

type GetFiles = GetConfig<'overrides'>

type GetFormatting = GetConfig<'overrides'>

type GetImports = GetConfig<'overrides'>

type GetJson = GetConfig<'ignorePatterns' | 'overrides'>

type GetMonorepo = GetConfig<'overrides'>

type GetReact = GetConfig<'overrides'>

type GetStylistic = GetConfig<'overrides'>

type GetTypeScript = GetConfig<'overrides'>

type GetTypeScriptFallback = GetConfig<'overrides'>

type Configs = {
  readonly comments: ReturnType<GetComments>
  readonly common: ReturnType<GetCommon>
  readonly files: ReturnType<GetFiles>
  readonly formatting: ReturnType<GetFormatting>
  readonly imports: ReturnType<GetImports>
  readonly json: ReturnType<GetJson>
  readonly monorepo: ReturnType<GetMonorepo>
  readonly react: ReturnType<GetReact>
  readonly stylistic: ReturnType<GetStylistic>
  readonly typescript: ReturnType<GetTypeScript>
  readonly typescriptFallback: ReturnType<GetTypeScriptFallback>
}

export type {
  Configs,
  GetComments,
  GetCommon,
  GetFiles,
  GetFormatting,
  GetImports,
  GetJson,
  GetMonorepo,
  GetReact,
  GetStylistic,
  GetTypeScript,
  GetTypeScriptFallback,
  LinterConfig,
  PickConfig
}
