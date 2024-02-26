import { builtinModules } from 'node:module'
import { getDependencies } from './getDependencies.js'
import { resolveImportPath } from './resolveImportPath.js'
import { resolvePathFromImport } from './resolvePathFromImport.js'
import type { BaseUrlReplacer } from './types.js'

const baseUrlReplacer: BaseUrlReplacer = function ({ config, file, orig }) {
  const requiredModule = resolvePathFromImport(orig)

  if (!requiredModule) {
    return orig
  }

  if (requiredModule.startsWith('.') || requiredModule.startsWith('node:')) {
    return orig
  }

  if (builtinModules.some((builtinModule) => requiredModule.startsWith(builtinModule))) {
    return orig
  }

  const dependencies = getDependencies()

  if (dependencies.some((dependency) => requiredModule.startsWith(dependency))) {
    return orig
  }

  return resolveImportPath({ config, file, orig, requiredModule })
}

// eslint-disable-next-line import/no-default-export
export default baseUrlReplacer
