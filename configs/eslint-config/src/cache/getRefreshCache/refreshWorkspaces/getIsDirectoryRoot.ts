import { dirname, resolve } from 'node:path'
import type { GetIsDirectoryRoot } from './types'

const getIsDirectoryRoot: GetIsDirectoryRoot = function ({ cwd, path }) {
  const directoryName = dirname(path)
  const absolutePath = resolve(cwd, directoryName)

  return absolutePath === cwd
}

export { getIsDirectoryRoot }
