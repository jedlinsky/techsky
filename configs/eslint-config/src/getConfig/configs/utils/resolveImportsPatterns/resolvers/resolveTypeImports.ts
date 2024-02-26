import { prependStartPattern, regex, regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import { resolveTypeImportPattern } from './resolveTypeImportPattern'
import type { ResolveTypeImports } from './types'

const resolveTypeImports: ResolveTypeImports = function ({ patterns }) {
  return patterns.reduce<readonly string[]>((accumulator, pattern) => {
    if (pattern === regexPattern.sideEffects) {
      return accumulator
    }

    const resolvedTypeImportPattern = resolveTypeImportPattern(pattern)

    if (resolvedTypeImportPattern.startsWith(regex.null)) {
      return [...accumulator, resolvedTypeImportPattern]
    }

    const resolvedPattern = prependStartPattern(resolvedTypeImportPattern)

    return [...accumulator, resolvedPattern]
  }, [])
}

export { resolveTypeImports }
