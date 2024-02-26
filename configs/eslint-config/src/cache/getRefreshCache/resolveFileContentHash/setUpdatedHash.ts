import { setUpdatedHashDelete } from './setUpdatedHashDelete'
import { setUpdatedHashUpdate } from './setUpdatedHashUpdate'
import type { SetUpdatedHash } from './types'

const setUpdatedHash: SetUpdatedHash = function ({
  cacheKey,
  fileContentHashes,
  fileContentHashMap,
  fileName,
  nextFileContentHash
}) {
  if (nextFileContentHash === null) {
    setUpdatedHashDelete({ cacheKey, fileContentHashes, fileContentHashMap, fileName })

    return
  }

  setUpdatedHashUpdate({ cacheKey, fileContentHashes, fileContentHashMap, fileName, nextFileContentHash })
}

export { setUpdatedHash }
