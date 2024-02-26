import type { FSWatcher } from 'chokidar'
import type { Config, UserOptions } from 'getConfig'

// eslint-disable-next-line functional/prefer-readonly-type
type CacheMap = Map<string, Config>

type FileContentHashesNonNullable = Record<string, string>

type FileContentHashes = FileContentHashesNonNullable | null

// eslint-disable-next-line functional/prefer-readonly-type
type FileContentHashMap = Map<string, FileContentHashesNonNullable>

// eslint-disable-next-line functional/prefer-readonly-type
type UserOptionsMap = Map<string, UserOptions>

type ESLintConfigPath = string

type WatchedWorkspaceNonNullable = {
  readonly eslintConfigPath: ESLintConfigPath
  readonly userOptions: UserOptions
}

type WatchedWorkspace = WatchedWorkspaceNonNullable | null

// eslint-disable-next-line functional/prefer-readonly-type
type WatchedWorkspacesMap = Map<string, WatchedWorkspaceNonNullable>

type Watcher = FSWatcher

type Cache = Config | null

type GetCacheReturn = {
  readonly cache: Cache
  readonly fileContentHashMap: FileContentHashMap
  readonly message: Message
  readonly setCache: SetCache
}

type GetCacheProps = {
  readonly eslintConfigPath: ESLintConfigPath
  readonly userOptions: UserOptions
}

type GetCache = (props: GetCacheProps) => GetCacheReturn

type CacheGetterProps = {
  readonly cacheMap: CacheMap
  readonly fileContentHashMap: FileContentHashMap
  readonly userOptionsMap: UserOptionsMap
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
  readonly watcher: Watcher
}

type CacheGetter = (props: CacheGetterProps) => GetCache

type GetCachedConfigProps = {
  readonly eslintConfigPath: ESLintConfigPath
  readonly userOptions: UserOptions
}

type GetCachedConfig = (props: GetCachedConfigProps) => Config

type CachedWorkspaces = readonly string[]

type GetCachedWorkspacesProps = {
  readonly cacheMap: CacheMap
}

type GetCachedWorkspaces = (props: GetCachedWorkspacesProps) => CachedWorkspaces

type CacheInternal = Cache

type GetCacheInternalProps = {
  readonly cacheKey: CacheKey
  readonly cacheMap: CacheMap
  readonly userOptions: UserOptions
  readonly userOptionsMap: UserOptionsMap
}

type GetCacheInternal = (props: GetCacheInternalProps) => CacheInternal

type CacheKey = string

type GetCacheKeyProps = {
  readonly eslintConfigPath: ESLintConfigPath
}

type GetCacheKey = (props: GetCacheKeyProps) => CacheKey

type ConfigFileName = string

type GetConfigFileNameProps = {
  readonly eslintConfigPath: ESLintConfigPath
}

type GetConfigFileName = (props: GetConfigFileNameProps) => ConfigFileName

type Message = string | null

type MessageType = 'loaded' | 'refreshed' | 'refreshedConfigFile'

type GetMessageProps = {
  readonly cacheKey: CacheKey
  readonly configFileName?: ConfigFileName
  readonly type: MessageType
}

type GetMessage = (props: GetMessageProps) => Message

type NotWatchedCachedWorkspaces = readonly string[] | null

type GetNotWatchedCachedWorkspacesProps = {
  readonly cacheMap: CacheMap
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type GetNotWatchedCachedWorkspaces = (props: GetNotWatchedCachedWorkspacesProps) => NotWatchedCachedWorkspaces

type PrettyCacheKey = string

type GetPrettyCacheKeyProps = {
  readonly cacheKey: CacheKey
}

type GetPrettyCacheKey = (props: GetPrettyCacheKeyProps) => PrettyCacheKey

type SetCache = (config: Config) => Config

type GetSetCacheProps = {
  readonly cacheKey: CacheKey
  readonly cacheMap: CacheMap
}

type GetSetCache = (props: GetSetCacheProps) => SetCache

type WatchedWorkspaces = readonly string[]

type GetWatchedWorkspacesProps = {
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type GetWatchedWorkspaces = (props: GetWatchedWorkspacesProps) => WatchedWorkspaces

type CWDPosix = string

type ResolveCWDPosixProps = {
  readonly cwd: string
}

type ResolveCWDPosix = (props: ResolveCWDPosixProps) => CWDPosix

type SetupCacheReturn = {
  readonly getCache: GetCache
}

type SetupCache = () => SetupCacheReturn

type UpdateWatchedWorkspacesUserOptionsProps = {
  readonly cacheKey: CacheKey
  readonly userOptions: UserOptions
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type UpdateWatchedWorkspacesUserOptions = (props: UpdateWatchedWorkspacesUserOptionsProps) => void

type WatchWorkspacesProps = {
  readonly cacheMap: CacheMap
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
  readonly watcher: Watcher
}

type WatchWorkspaces = (props: WatchWorkspacesProps) => void

export type {
  CacheGetter,
  CacheKey,
  CacheMap,
  Config,
  CWDPosix,
  ESLintConfigPath,
  FileContentHashes,
  FileContentHashesNonNullable,
  FileContentHashMap,
  GetCache,
  GetCachedConfig,
  GetCachedWorkspaces,
  GetCacheInternal,
  GetCacheKey,
  GetConfigFileName,
  GetMessage,
  GetNotWatchedCachedWorkspaces,
  GetPrettyCacheKey,
  GetSetCache,
  GetWatchedWorkspaces,
  ResolveCWDPosix,
  SetupCache,
  UpdateWatchedWorkspacesUserOptions,
  UserOptions,
  UserOptionsMap,
  WatchedWorkspace,
  WatchedWorkspaceNonNullable,
  WatchedWorkspacesMap,
  Watcher,
  WatchWorkspaces
}
