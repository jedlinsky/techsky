import type { Has } from 'getConfig'

type CommonJS = 'cjs'

type JSONUnion = 'json'

type JSONCUnion = 'jsonc'

type ReactUnionJavaScript = 'jsx'

type ReactUnionTypeScript = 'tsx'

type ReactUnion = ReactUnionJavaScript | ReactUnionTypeScript

type StandardUnionJavaScript = 'cjs' | 'js' | 'mjs'

type StandardUnionTypeScript = 'cts' | 'mts' | 'ts'

type StandardUnion = StandardUnionJavaScript | StandardUnionTypeScript

type DeclarationsUnion = `d.${StandardUnionTypeScript}`

type JavaScriptUnion = ReactUnionJavaScript | StandardUnionJavaScript

type TypeScriptUnion = DeclarationsUnion | ReactUnionTypeScript | StandardUnionTypeScript

type TypeScriptWithoutDeclarationsUnion = ReactUnionTypeScript | StandardUnionTypeScript

type CommonUnion = JavaScriptUnion | TypeScriptUnion

type CommonWithoutDeclarationsUnion = JavaScriptUnion | TypeScriptWithoutDeclarationsUnion

type AllUnion = CommonUnion | JSONCUnion | JSONUnion

type Extensions = {
  readonly all: readonly AllUnion[]
  readonly allAvailable: readonly AllUnion[]
  readonly allAvailableWithJavaScript: readonly AllUnion[]
  readonly commonJS: readonly CommonJS[]
  readonly declarations: readonly DeclarationsUnion[]
  readonly javascript: readonly JavaScriptUnion[]
  readonly json: readonly [JSONUnion]
  readonly jsonc: readonly [JSONCUnion]
  readonly reactJavaScript: readonly [ReactUnionJavaScript]
  readonly reactTypeScript: readonly [ReactUnionTypeScript]
  readonly resolvedCommon: readonly CommonUnion[]
  readonly resolvedCommonWithoutDeclarations: readonly CommonWithoutDeclarationsUnion[]
  readonly resolvedJavaScript: readonly JavaScriptUnion[]
  readonly resolvedReact: readonly [ReactUnion]
  readonly resolvedStandard: readonly StandardUnion[]
  readonly resolvedTypeScript: readonly TypeScriptUnion[]
  readonly resolvedTypeScriptWithoutDeclarations: readonly TypeScriptWithoutDeclarationsUnion[]
  readonly standardJavaScript: readonly StandardUnionJavaScript[]
  readonly standardTypeScript: readonly StandardUnionTypeScript[]
  readonly typescript: readonly TypeScriptUnion[]
  readonly typescriptWithoutDeclarations: readonly TypeScriptWithoutDeclarationsUnion[]
}

type ResolveExtensions = (has: Has) => Extensions

export type { Extensions, ResolveExtensions }
