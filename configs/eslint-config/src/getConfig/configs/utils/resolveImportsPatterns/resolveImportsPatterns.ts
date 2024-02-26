import { getPatterns } from './getPatterns'
import { resolveNonTypeImports, resolveTypeImports } from './resolvers'
import type { ResolveImportsPatterns } from './types'

const resolveImportsPatterns: ResolveImportsPatterns = function (options) {
  const patterns = getPatterns(options)

  const nonTypeImports = resolveNonTypeImports({ patterns })
  const typeImports = resolveTypeImports({ patterns })

  return [...nonTypeImports, ...typeImports]
}

export { resolveImportsPatterns }
