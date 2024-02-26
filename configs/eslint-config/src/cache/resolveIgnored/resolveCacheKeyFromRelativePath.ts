import type { ResolveCacheKeyFromRelativePath } from './types'

const resolveCacheKeyFromRelativePath: ResolveCacheKeyFromRelativePath = function ({ isRootDirectory, relativePath }) {
  if (isRootDirectory || relativePath === '.') {
    return '.'
  }

  if (relativePath.startsWith('./')) {
    return relativePath
  }

  return `./${relativePath}`
}

export { resolveCacheKeyFromRelativePath }
