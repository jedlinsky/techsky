import { regex, regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { ResolveTypeImportPattern } from './types'

const resolveTypeImportPattern: ResolveTypeImportPattern = function (pattern) {
  const patternWithoutStartingNull = pattern.startsWith(regex.null) ? pattern.replace(regex.null, '') : pattern

  if (patternWithoutStartingNull.endsWith(regexPattern.anyOrEnd)) {
    return patternWithoutStartingNull.replace(regexPattern.anyOrEnd, regexPattern.anyOrEndType)
  }

  if (patternWithoutStartingNull.endsWith(regexPattern.nestedOrEnd)) {
    return patternWithoutStartingNull.replace(regexPattern.nestedOrEnd, regexPattern.nestedOrEndType)
  }

  if (patternWithoutStartingNull.endsWith('$)')) {
    return patternWithoutStartingNull.replace(/\$\)$/, `${regexPattern.type})`)
  }

  if (patternWithoutStartingNull.endsWith('$))')) {
    return patternWithoutStartingNull.replace(/\$\)\)$/, `${regexPattern.type}))`)
  }

  if (patternWithoutStartingNull === `^`) {
    return regexPattern.type
  }

  return `${patternWithoutStartingNull}${regexPattern.type}`
}

export { resolveTypeImportPattern }
