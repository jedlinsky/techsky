import { resolveIsPrettier } from 'cache/resolveFileType'
import { resolveFileNameFromPath } from './resolveFileNameFromPath'
import { resolveIsPathBaseDirectory } from './resolveIsPathBaseDirectory'
import { resolveWatchFiles } from './resolveWatchFiles'
import type { ResolveExcludedFiles } from './types'

const resolveExcludedFiles: ResolveExcludedFiles = function ({ cache, cwdPosix, path }) {
  const fileName = resolveFileNameFromPath({ path })

  const isFileNamePrettierConfigFile = resolveIsPrettier({ fileName })
  const isPathBaseDirectory = resolveIsPathBaseDirectory({ cache, cwdPosix, path })

  if (isFileNamePrettierConfigFile || isPathBaseDirectory) {
    return false
  }

  const watchFiles = resolveWatchFiles({ cwdPosix, path })

  return !watchFiles.includes(fileName)
}

export { resolveExcludedFiles }
