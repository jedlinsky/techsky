import { regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { GetPackageScopePattern } from './types'

const getPackageScopePattern: GetPackageScopePattern = function (scope) {
  return `@${scope}${regexPattern.nested}`
}

export { getPackageScopePattern }
