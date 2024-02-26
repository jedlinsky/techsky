import type { SetUpdatedHashUpdate } from './types'

const setUpdatedHashUpdate: SetUpdatedHashUpdate = function ({
  cacheKey,
  fileContentHashes,
  fileContentHashMap,
  fileName,
  nextFileContentHash
}) {
  fileContentHashMap.set(cacheKey, { ...fileContentHashes, [fileName]: nextFileContentHash })
}

export { setUpdatedHashUpdate }
