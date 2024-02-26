import { readdirSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { WATCH_COMMON_FILES, WATCH_ROOT_FILES } from 'cache/constants'
import { getCacheKey } from 'cache/getCacheKey'
import { resolveFileContentHash } from 'cache/getRefreshCache/resolveFileContentHash'
import { resolveIsPrettier } from 'cache/resolveFileType'
import type { SetInitialFileContentHashes } from './types'

const setInitialFileContentHashes: SetInitialFileContentHashes = function ({ eslintConfigPath, fileContentHashMap }) {
  const cwd = process.cwd()
  const absoluteConfigPath = resolve(cwd, eslintConfigPath)
  const absoluteDirectoryPath = dirname(absoluteConfigPath)
  const isRootDirectory = absoluteDirectoryPath === cwd
  const directoryEntries = readdirSync(absoluteDirectoryPath, { withFileTypes: true })

  const fileNames = directoryEntries.reduce<readonly string[]>((accumulator, directoryEntry) => {
    if (!directoryEntry.isFile()) {
      return accumulator
    }

    return [...accumulator, directoryEntry.name]
  }, [])

  const resolvedWatchFiles = isRootDirectory ? WATCH_ROOT_FILES : WATCH_COMMON_FILES

  const path = isRootDirectory ? '.' : relative(cwd, absoluteDirectoryPath)

  const watchedFiles = fileNames.filter(
    (fileName) => resolvedWatchFiles.includes(fileName) || resolveIsPrettier({ fileName })
  )

  const cacheKey = getCacheKey({ eslintConfigPath })

  watchedFiles.forEach((fileName) => {
    const fileNamePath = join(path, fileName)

    return resolveFileContentHash({
      cacheKey,
      cwd,
      eventName: 'add',
      fileContentHashMap,
      path: fileNamePath
    })
  })
}

export { setInitialFileContentHashes }
