import { setNewHashes } from './setNewHashes'
import { setUpdatedHash } from './setUpdatedHash'
import { setUpdatedHashUpdate } from './setUpdatedHashUpdate'
import type { SetFileContentHash } from './types'

const setFileContentHash: SetFileContentHash = function ({
  cacheKey,
  fileContentHashes,
  fileContentHashMap,
  fileName,
  nextFileContentHash,
  previousFileContentHash
}) {
  if (fileContentHashes === null) {
    setNewHashes({ cacheKey, fileContentHashMap, fileName, nextFileContentHash })

    return { isChanged: true }
  }

  if (previousFileContentHash === null && nextFileContentHash === null) {
    // maybe unable to parse file, so handle it as changed anyway
    return { isChanged: true }
  }

  if (previousFileContentHash === nextFileContentHash) {
    return { isChanged: false }
  }

  if (previousFileContentHash === null && nextFileContentHash) {
    setUpdatedHashUpdate({ cacheKey, fileContentHashes, fileContentHashMap, fileName, nextFileContentHash })

    return { isChanged: true }
  }

  if (previousFileContentHash) {
    setUpdatedHash({ cacheKey, fileContentHashes, fileContentHashMap, fileName, nextFileContentHash })

    return { isChanged: true }
  }

  return { isChanged: false }
}

export { setFileContentHash }
