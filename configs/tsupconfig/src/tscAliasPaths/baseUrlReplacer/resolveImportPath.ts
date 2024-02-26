import normalizePath from 'normalize-path'
import { resolveImportRelativePath } from './resolveImportRelativePath.js'
import { resolvePathFromImport } from './resolvePathFromImport.js'
import type { ResolveImportPath } from './types.js'

const resolveImportPath: ResolveImportPath = function ({ config, file, orig, requiredModule }) {
  const index = orig.indexOf(requiredModule)

  const relativePath = resolveImportRelativePath({ config, file })

  const newImportScript = `${orig.substring(0, index) + relativePath}/${orig.substring(index)}`

  const modulePath = resolvePathFromImport(newImportScript)

  if (!modulePath) {
    return orig
  }

  return newImportScript.replace(modulePath, normalizePath(modulePath))
}

export { resolveImportPath }
