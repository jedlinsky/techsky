import type { ResolveCacheKey } from './types'

const resolveCacheKey: ResolveCacheKey = function ({ workspaceDirectoryPath }) {
  return workspaceDirectoryPath === '.' ? workspaceDirectoryPath : `./${workspaceDirectoryPath}`
}

export { resolveCacheKey }
