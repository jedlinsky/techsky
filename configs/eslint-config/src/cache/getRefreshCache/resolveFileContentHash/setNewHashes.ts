import type { SetNewHashes } from './types'

const setNewHashes: SetNewHashes = function ({ cacheKey, fileContentHashMap, fileName, nextFileContentHash }) {
  if (nextFileContentHash === null) {
    return
  }

  fileContentHashMap.set(cacheKey, { [fileName]: nextFileContentHash })
}

export { setNewHashes }
