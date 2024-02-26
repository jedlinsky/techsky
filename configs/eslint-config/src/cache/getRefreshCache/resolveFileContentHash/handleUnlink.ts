import { setUpdatedHashDelete } from './setUpdatedHashDelete'
import type { HandleUnlink } from './types'

const handleUnlink: HandleUnlink = function ({ cacheKey, fileContentHashes, fileContentHashMap, fileName }) {
  if (fileContentHashes) {
    setUpdatedHashDelete({ cacheKey, fileContentHashes, fileContentHashMap, fileName })
  }

  return {
    fileContentHash: null,
    isChanged: true
  }
}

export { handleUnlink }
