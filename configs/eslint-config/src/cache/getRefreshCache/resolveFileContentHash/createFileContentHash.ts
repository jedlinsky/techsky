import { createHash } from 'node:crypto'
import { resolveFileContent } from 'cache/resolveFileContent'
import type { CreateFileContentHash } from './types'

const createFileContentHash: CreateFileContentHash = function ({ cwd, path }) {
  const fileContent = resolveFileContent({ cwd, path })

  if (fileContent === null) {
    return null
  }

  const stringifiedFileContent = JSON.stringify(fileContent)

  return createHash('sha256').update(stringifiedFileContent, 'utf8').digest('hex')
}

export { createFileContentHash }
