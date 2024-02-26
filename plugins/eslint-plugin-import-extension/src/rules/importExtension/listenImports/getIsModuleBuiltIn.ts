import { builtinModules } from 'node:module'
import type { GetIsModuleBuiltIn } from './types.js'

const getIsModuleBuiltIn: GetIsModuleBuiltIn = function (moduleName) {
  return builtinModules.some((builtIn) => builtIn === moduleName || `node:${builtIn}` === moduleName)
}

export { getIsModuleBuiltIn }
