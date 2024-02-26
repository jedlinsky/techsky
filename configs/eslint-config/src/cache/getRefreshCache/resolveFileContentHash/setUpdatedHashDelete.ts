import { getFileContentHashesWithoutCurrentFile } from './getFileContentHashesWithoutCurrentFile'
import type { SetUpdatedHashDelete } from './types'

const setUpdatedHashDelete: SetUpdatedHashDelete = function ({
  cacheKey,
  fileContentHashes,
  fileContentHashMap,
  fileName
}) {
  const fileContentHashesWithoutCurrentFile = getFileContentHashesWithoutCurrentFile({
    fileContentHashes,
    fileName
  })

  if (fileContentHashesWithoutCurrentFile) {
    fileContentHashMap.set(cacheKey, fileContentHashesWithoutCurrentFile)

    return
  }

  fileContentHashMap.delete(cacheKey)
}

export { setUpdatedHashDelete }
