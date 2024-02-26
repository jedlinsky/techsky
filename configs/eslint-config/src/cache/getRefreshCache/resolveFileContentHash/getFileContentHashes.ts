import type { GetFileContentHashes } from './types'

const getFileContentHashes: GetFileContentHashes = function ({ cacheKey, fileContentHashMap }) {
  return fileContentHashMap.get(cacheKey) ?? null
}

export { getFileContentHashes }
