import type { GetFileContentHash } from './types'

const getFileContentHash: GetFileContentHash = function ({ fileContentHashes, fileName }) {
  return fileContentHashes?.[fileName] ?? null
}

export { getFileContentHash }
