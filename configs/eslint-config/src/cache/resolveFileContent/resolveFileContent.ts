import { resolve } from 'node:path'
import sortKeysRecursive from 'sort-keys-recursive'
import { resolveFileType } from 'cache/resolveFileType'
import { getFileContent } from './getFileContent'
import type { ResolveFileContent } from './types'

const resolveFileContent: ResolveFileContent = function ({ cwd, path }) {
  const absolutePath = resolve(cwd, path)

  const fileType = resolveFileType({ path })

  const fileContent = getFileContent({ absolutePath, cwd, fileType })

  if (!fileContent) {
    return null
  }

  return sortKeysRecursive(fileContent)
}

export { resolveFileContent }
