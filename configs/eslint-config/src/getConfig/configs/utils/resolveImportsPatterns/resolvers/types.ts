import type { Pattern, Patterns } from 'getConfig/configs/utils/resolveImportsPatterns/types'

type ResolveGenericModulesPatternProps = {
  readonly patterns: Patterns
}

type ResolveGenericModulesPattern = (props: ResolveGenericModulesPatternProps) => Patterns

type NonGenericModuleNames = readonly string[] | null

type ResolveNonGenericModuleNamesProps = {
  readonly patterns: Patterns
}

type ResolveNonGenericModuleNames = (props: ResolveNonGenericModuleNamesProps) => NonGenericModuleNames

type ResolveNonTypeImportsProps = {
  readonly patterns: Patterns
}

type ResolveNonTypeImports = (props: ResolveNonTypeImportsProps) => Patterns

type ResolveTypeImportPattern = (pattern: Pattern) => Pattern

type ResolveTypeImportsProps = {
  readonly patterns: Patterns
}

type ResolveTypeImports = (props: ResolveTypeImportsProps) => Patterns

export type {
  ResolveGenericModulesPattern,
  ResolveNonGenericModuleNames,
  ResolveNonTypeImports,
  ResolveTypeImportPattern,
  ResolveTypeImports
}
