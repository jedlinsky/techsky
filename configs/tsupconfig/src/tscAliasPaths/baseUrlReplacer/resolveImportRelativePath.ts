import { dirname, relative } from 'node:path'
import normalizePath from 'normalize-path'
import type { ResolveImportRelativePath } from './types.js'

const resolveImportRelativePath: ResolveImportRelativePath = function ({ config, file }) {
  const fileDirname = dirname(file)
  const absoluteAliasPath = config.pathCache.getAbsoluteAliasPath(config.outPath, '')
  const relativeFilePathToAbsoluteAlias = relative(fileDirname, absoluteAliasPath)

  const normalizedPath = normalizePath(relativeFilePathToAbsoluteAlias)

  return normalizedPath.startsWith('.') ? normalizedPath : `./${normalizedPath}`
}

export { resolveImportRelativePath }
