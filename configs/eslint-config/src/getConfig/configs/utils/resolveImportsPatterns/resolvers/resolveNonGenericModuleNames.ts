import { regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { ResolveNonGenericModuleNames } from './types'

const startsWithLetterOrScopeRegex = new RegExp(/^[@a-zA-Z]/)
const firstModuleNameSegmentRegex = new RegExp(/(?!\w|@|-|_).*/)

const resolveNonGenericModuleNames: ResolveNonGenericModuleNames = function ({ patterns }) {
  const fromIndex = patterns.findIndex((pattern) => pattern === regexPattern.genericModules)

  const moduleNames = patterns.reduce<readonly string[]>((accumulator, pattern, index) => {
    if (index <= fromIndex) {
      return accumulator
    }

    if (!startsWithLetterOrScopeRegex.test(pattern)) {
      return accumulator
    }

    const moduleName = pattern.replace(firstModuleNameSegmentRegex, '')

    return [...accumulator, moduleName]
  }, [])

  const unique = [...new Set(moduleNames)]

  if (unique.length === 0) {
    return null
  }

  return unique
}

export { resolveNonGenericModuleNames }
