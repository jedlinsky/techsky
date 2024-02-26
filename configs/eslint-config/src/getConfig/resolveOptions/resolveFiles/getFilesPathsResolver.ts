import { resolveFilesPaths } from './resolveFilesPaths'
import type { GetFilesPathsResolver } from './types'

const getFilesPathsResolver: GetFilesPathsResolver = function ({ extensions, has, paths }) {
  return function (resolverProps) {
    return resolveFilesPaths({ extensions, has, paths, resolverProps })
  }
}

export { getFilesPathsResolver }
