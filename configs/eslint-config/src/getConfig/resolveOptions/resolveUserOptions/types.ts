import type { O } from 'ts-toolbelt'
import type { Simplify } from 'type-fest'
import type { LinterConfig, Prettier } from 'getConfig'
import type { ResolvedRuleReactI18n, RuleReactI18n } from './resolveRuleReactI18n'

type DefaultUserOptions = O.Optional<ResolvedUserOptions, 'rules'>

type Type = 'full' | 'lite'

type RuleNoRestrictedImports = readonly {
  readonly allowTypeImports?: boolean
  readonly importNames?: readonly string[]
  readonly message: string
  readonly name: string
}[]

type RuleReactForbidElements = readonly string[] | 'all' | 'none'

type RuleRestrictImports = {
  readonly [TPattern: string]: {
    readonly locations: readonly string[]
    readonly message: string
  }
}

type Rules = {
  readonly abbreviationsAllowList?: readonly string[]
  readonly additionalReactHooks?: readonly string[]
  readonly ignorePropertiesNamingConvention?: string
  readonly noRestrictedImports?: RuleNoRestrictedImports
  readonly noSecretsExcludeDirs?: readonly string[]
  readonly reactForbidElements?: RuleReactForbidElements
  readonly reactI18n?: RuleReactI18n
  readonly restrictImports?: RuleRestrictImports
  readonly todos?: string
}

type ResolvedRules =
  Omit<Rules, 'reactForbidElements' | 'reactI18n'> extends infer TOmitted
    ? TOmitted extends object
      ? Simplify<
          TOmitted & {
            readonly reactForbidElements: RuleReactForbidElements
            readonly reactI18n: ResolvedRuleReactI18n
          }
        >
      : never
    : never

type ResolvePath = (path: string) => string

type UserOptions =
  Omit<ResolvedUserOptions, 'rules'> extends infer TOmittedRules
    ? TOmittedRules extends object
      ? O.Optional<TOmittedRules> extends infer TOptional
        ? TOptional extends object
          ? Simplify<
              TOptional & {
                readonly rules?: Rules
              }
            >
          : never
        : never
      : never
    : never

type ResolvedUserOptions = {
  readonly baseUrl?: string
  readonly envPath?: string
  readonly extend?: LinterConfig
  readonly ignore?: readonly string[]
  readonly ignoreGitIgnored: boolean
  readonly mergePrettier: boolean
  readonly nextJSAppDir: string | null
  readonly nextJSPagesDir: string | null
  readonly npmScope?: string
  readonly prettier?: Prettier
  readonly rules: ResolvedRules
  readonly tsConfigPath: string
  readonly type: Type
}

type ResolveUserOptions = (userOptions: UserOptions) => ResolvedUserOptions

type ResolvedUserOptionsPaths = Pick<UserOptions, 'envPath' | 'nextJSAppDir' | 'nextJSPagesDir' | 'tsConfigPath'>

type ResolveUserOptionsPaths = (userOptions: UserOptions) => ResolvedUserOptionsPaths

type ResolveUserOptionsRules = (userOptions: UserOptions) => ResolvedRules

export type {
  DefaultUserOptions,
  ResolvedUserOptions,
  ResolvePath,
  ResolveUserOptions,
  ResolveUserOptionsPaths,
  ResolveUserOptionsRules,
  UserOptions
}
