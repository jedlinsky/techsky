import type { Pattern, Patterns } from 'getConfig/configs/utils/resolveImportsPatterns/types'

type GetMUIPatterns = () => Patterns

type GetNodeBuiltinModulesPattern = () => Pattern

type GetPackageScopePattern = (scope: string) => Pattern

type GetParentImportPatterns = () => Patterns

type GetRelativeImportPatterns = () => Patterns

type GetTSConfigPathsPatterns = (tsConfigPaths: readonly string[]) => Patterns

export type {
  GetMUIPatterns,
  GetNodeBuiltinModulesPattern,
  GetPackageScopePattern,
  GetParentImportPatterns,
  GetRelativeImportPatterns,
  GetTSConfigPathsPatterns
}
