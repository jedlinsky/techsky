import { watch } from 'chokidar'
import { cacheGetter } from './cacheGetter'
import { getRefreshCache } from './getRefreshCache'
import { resolveCWDPosix } from './resolveCWDPosix'
import { resolveIgnored } from './resolveIgnored'
import type {
  Config,
  FileContentHashesNonNullable,
  SetupCache,
  UserOptions,
  WatchedWorkspaceNonNullable
} from './types'

const setupCache: SetupCache = function () {
  const cacheMap = new Map<string, Config>()
  const fileContentHashMap = new Map<string, FileContentHashesNonNullable>()
  const userOptionsMap = new Map<string, UserOptions>()
  const watchedWorkspacesMap = new Map<string, WatchedWorkspaceNonNullable>()

  const cwd = process.cwd()
  const cwdPosix = resolveCWDPosix({ cwd })

  const ignored = resolveIgnored({ cacheMap, cwdPosix })

  const watcher = watch([], {
    cwd,
    depth: 0,
    disableGlobbing: true,
    ignored,
    ignoreInitial: true
  })

  // eslint-disable-next-line functional/no-expression-statements
  watcher.on('all', getRefreshCache({ cacheMap, cwd, fileContentHashMap, watchedWorkspacesMap }))

  return {
    getCache: cacheGetter({ cacheMap, fileContentHashMap, userOptionsMap, watchedWorkspacesMap, watcher })
  }
}

export { setupCache }
