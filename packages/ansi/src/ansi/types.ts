import type { Entries, RequireAtLeastOne, SetRequired } from 'type-fest'
import type { code } from './code.js'

type Code = typeof code

type CodeType = keyof Code

type CodeValuesAsTrue = {
  readonly [TCodeKey in CodeType]: {
    readonly [TKey in keyof Code[TCodeKey]]: true
  }
}

type CodeReset =
  | SetRequired<{ readonly [TKey in keyof CodeValuesAsTrue['reset']]?: TKey extends 'all' ? true : never }, 'all'>
  | { readonly [TKey in keyof CodeValuesAsTrue['reset']]?: TKey extends 'all' ? never : true }

type CodeStyle = RequireAtLeastOne<CodeValuesAsTrue['style']>

type _AnsiObject = {
  readonly bg: keyof Code['bg']
  readonly color: keyof Code['color']
  readonly reset: CodeReset
  readonly style: CodeStyle
}

type AnsiObject = RequireAtLeastOne<_AnsiObject>

type AnsiObjectEntries = Entries<_AnsiObject>

type AnsiObjectKeys = Code[keyof Code] extends infer TCodeValues
  ? TCodeValues extends unknown
    ? readonly (keyof TCodeValues)[]
    : never
  : never

type AnsiString = {
  readonly [TKey in CodeType]: keyof Code[TKey] extends infer TKeys
    ? TKeys extends string
      ? Capitalize<TKeys> extends infer TCapitalizedKeys
        ? TCapitalizedKeys extends string
          ? `${TKey}${TCapitalizedKeys}`
          : never
        : never
      : never
    : never
}[CodeType]

type AnsiStyle = AnsiObject | AnsiString

type Ansi = (text: number | string, style: AnsiStyle) => string

type AnsiStringToObject = (ansiString: AnsiString) => AnsiObject

type EscapeCode = (code: number) => string

type AnsiObjectEscapedCodes = {
  readonly [TKey in CodeType]?: readonly string[]
}

type ResolveAnsiObjectEscapedCodes = (ansiObject: AnsiObject) => AnsiObjectEscapedCodes

type ResolveCodeTypeFromAnsiString = (ansiString: AnsiString) => CodeType

type ResolveRestoreProps = Partial<Omit<_AnsiObject, 'reset'>>

type ResolveRestore = (ansiObject: ResolveRestoreProps) => string

export type {
  Ansi,
  AnsiObject,
  AnsiObjectEntries,
  AnsiObjectEscapedCodes,
  AnsiObjectKeys,
  AnsiStringToObject,
  CodeType,
  EscapeCode,
  ResolveAnsiObjectEscapedCodes,
  ResolveCodeTypeFromAnsiString,
  ResolveRestore
}
