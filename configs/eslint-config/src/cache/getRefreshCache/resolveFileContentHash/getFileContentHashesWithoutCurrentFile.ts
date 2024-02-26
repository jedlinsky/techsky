import type { FileContentHashesNonNullable } from 'cache/types'
import type { GetFileContentHashesWithoutCurrentFile } from './types'

const getFileContentHashesWithoutCurrentFile: GetFileContentHashesWithoutCurrentFile = function ({
  fileContentHashes,
  fileName
}) {
  const fileContentHashesWithoutCurrentFile = Object.entries(fileContentHashes).reduce<FileContentHashesNonNullable>(
    (accumulator, [key, value]) => {
      if (key === fileName) {
        return accumulator
      }

      return {
        ...accumulator,
        [key]: value
      }
    },
    {}
  )

  if (Object.keys(fileContentHashesWithoutCurrentFile).length === 0) {
    return null
  }

  return fileContentHashesWithoutCurrentFile
}

export { getFileContentHashesWithoutCurrentFile }
