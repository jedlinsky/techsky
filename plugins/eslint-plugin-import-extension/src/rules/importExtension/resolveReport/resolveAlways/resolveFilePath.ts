import { posix, win32 } from 'node:path'
import { resolveModuleName, sys } from 'typescript'
import type { ResolveFilePath } from './types.js'

const resolveFilePath: ResolveFilePath = function ({ compilerOptions, filePath, name, path }) {
  const resolvedModuleName = resolveModuleName(name, path, compilerOptions, sys)

  const { resolvedModule } = resolvedModuleName

  if (!resolvedModule) {
    return filePath?.replaceAll(win32.sep, posix.sep) ?? null
  }

  return resolvedModule.resolvedFileName
}

export { resolveFilePath }
