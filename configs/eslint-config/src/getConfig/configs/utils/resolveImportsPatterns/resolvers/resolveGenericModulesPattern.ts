import {
  joinModuleNames,
  negativeLookaheadPattern,
  regexPattern
} from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import { resolveNonGenericModuleNames } from './resolveNonGenericModuleNames'
import type { ResolveGenericModulesPattern } from './types'

const resolveGenericModulesPattern: ResolveGenericModulesPattern = function ({ patterns }) {
  const nonGenericModuleNames = resolveNonGenericModuleNames({ patterns })

  const nonGenericModuleNamesPattern = nonGenericModuleNames
    ? negativeLookaheadPattern(`^${joinModuleNames(nonGenericModuleNames)}`)
    : null

  if (nonGenericModuleNamesPattern === null) {
    return patterns
  }

  return patterns.map((pattern) => {
    if (pattern !== regexPattern.genericModules) {
      return pattern
    }

    return `${nonGenericModuleNamesPattern}${regexPattern.genericModules}`
  })
}

export { resolveGenericModulesPattern }
