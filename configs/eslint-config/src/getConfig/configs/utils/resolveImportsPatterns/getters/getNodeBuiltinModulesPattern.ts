import { builtinModules } from 'node:module'
import { joinModuleNames, optionalPattern, regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { GetNodeBuiltinModulesPattern } from './types'

const getNodeBuiltinModulesPattern: GetNodeBuiltinModulesPattern = function () {
  return `${optionalPattern('node:')}${joinModuleNames(builtinModules)}${regexPattern.nestedOrEnd}`
}

export { getNodeBuiltinModulesPattern }
