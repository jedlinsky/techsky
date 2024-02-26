import { prependStartPattern, regex, regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { ResolveNonTypeImports } from './types'

const resolveNonTypeImports: ResolveNonTypeImports = function ({ patterns }) {
  return patterns.map((pattern) => {
    if (pattern.includes(regex.null)) {
      return prependStartPattern(pattern)
    }

    if (pattern.startsWith('^')) {
      return pattern.replace('^', regexPattern.notType)
    }

    return `${regexPattern.notType}${pattern}`
  })
}

export { resolveNonTypeImports }
