import { removeFirstDirectoryMatchInPath } from './removeFirstDirectoryMatchInPath.js'
import { replacePathExtension } from './replacePathExtension.js'
import type { ResolveOutputPath } from './types.js'

const resolveOutputPath: ResolveOutputPath = function ({ extension = 'js', path, srcDir }) {
  const pathWithoutSrcDir = removeFirstDirectoryMatchInPath({ directory: srcDir, path })

  return replacePathExtension({ extension, path: pathWithoutSrcDir })
}

export { resolveOutputPath }
