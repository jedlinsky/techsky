import { basename } from 'node:path'
import { createFileContentHash } from './createFileContentHash'
import { getFileContentHash } from './getFileContentHash'
import { getFileContentHashes } from './getFileContentHashes'
import { handleUnlink } from './handleUnlink'
import { setFileContentHash } from './setFileContentHash'
import type { ResolveFileContentHash } from './types'

const resolveFileContentHash: ResolveFileContentHash = function ({
  cacheKey,
  cwd,
  eventName,
  fileContentHashMap,
  path
}) {
  const fileName = basename(path)

  const fileContentHashes = getFileContentHashes({ cacheKey, fileContentHashMap })

  if (eventName === 'unlink') {
    return handleUnlink({ cacheKey, fileContentHashes, fileContentHashMap, fileName })
  }

  const previousFileContentHash = getFileContentHash({ fileContentHashes, fileName })
  const nextFileContentHash = createFileContentHash({ cwd, path })

  const { isChanged } = setFileContentHash({
    cacheKey,
    fileContentHashes,
    fileContentHashMap,
    fileName,
    nextFileContentHash,
    previousFileContentHash
  })

  return {
    fileContentHash: nextFileContentHash,
    isChanged
  }
}

export { resolveFileContentHash }
