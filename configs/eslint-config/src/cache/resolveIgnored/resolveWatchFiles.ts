import { dirname } from 'node:path/posix'
import { WATCH_COMMON_FILES, WATCH_ROOT_FILES } from 'cache/constants'
import type { ResolveWatchFiles } from './types'

const resolveWatchFiles: ResolveWatchFiles = function ({ cwdPosix, path }) {
  const isInRootDirectory = dirname(path) === cwdPosix

  return isInRootDirectory ? WATCH_ROOT_FILES : WATCH_COMMON_FILES
}

export { resolveWatchFiles }
