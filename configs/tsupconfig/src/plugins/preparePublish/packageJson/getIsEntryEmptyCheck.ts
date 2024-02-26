import { removeFirstDirectoryMatchInPath } from 'resolvePath/removeFirstDirectoryMatchInPath.js'
import type { GetIsEntryEmptyCheck } from './types.js'

const getIsEntryEmptyCheck: GetIsEntryEmptyCheck = function ({ deleteEmptyEmittedFiles, emptyEmittedFiles, outDir }) {
  return function (entry) {
    if (!deleteEmptyEmittedFiles) {
      return false
    }

    if (entry === null) {
      return true
    }

    if (emptyEmittedFiles === null) {
      return false
    }

    return emptyEmittedFiles.some((path) => removeFirstDirectoryMatchInPath({ directory: outDir, path }) === entry)
  }
}

export { getIsEntryEmptyCheck }
