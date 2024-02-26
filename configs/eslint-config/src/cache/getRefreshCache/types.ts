import type {
  CacheKey,
  CacheMap,
  Config,
  ESLintConfigPath,
  FileContentHashMap,
  UserOptions,
  WatchedWorkspace,
  WatchedWorkspaceNonNullable,
  WatchedWorkspacesMap
} from 'cache/types'

type AcceptedEvents = readonly EventName[]

type GetAcceptedEventsProps = {
  readonly config: Config
  readonly posixPath: PosixPath
}

type GetAcceptedEvents = (props: GetAcceptedEventsProps) => AcceptedEvents

type CacheNonNullable = {
  readonly cacheKey: CacheKey
  readonly config: Config
}

type Cache = CacheNonNullable | null

type GetCacheProps = {
  readonly cacheMap: CacheMap
  readonly posixPath: PosixPath
}

type GetCache = (props: GetCacheProps) => Cache

type CacheKeyFromPath = {
  readonly cacheKey: CacheKey
  readonly cacheKeyFallback: CacheKey
}

type GetCacheKeyFromPathProps = {
  readonly posixPath: PosixPath
}

type GetCacheKeyFromPath = (props: GetCacheKeyFromPathProps) => CacheKeyFromPath

type FormattedEventName = string

type GetFormattedEventNameProps = {
  readonly eventName: EventName
}

type GetFormattedEventName = (props: GetFormattedEventNameProps) => FormattedEventName

type IsPathInBaseDirectory = boolean

type GetIsPathInBaseDirectoryProps = {
  readonly config: Config
  readonly posixPath: PosixPath
}

type GetIsPathInBaseDirectory = (props: GetIsPathInBaseDirectoryProps) => IsPathInBaseDirectory

type IsTurboEventIgnored = boolean

type GetIsTurboEventIgnoredProps = {
  readonly eventName: EventName
  readonly path: string
}

type GetIsTurboEventIgnored = (props: GetIsTurboEventIgnoredProps) => IsTurboEventIgnored

type PosixPath = string

type GetPosixPathProps = {
  readonly path: string
}

type GetPosixPath = (props: GetPosixPathProps) => PosixPath

type PrettyChangedPath = string

type GetPrettyChangedPathProps = {
  readonly cacheKey: CacheKey
  readonly posixPath: PosixPath
}

type GetPrettyChangedPath = (props: GetPrettyChangedPathProps) => PrettyChangedPath

type DirectoryEventName = 'addDir' | 'unlinkDir'

type FileEventName = 'add' | 'change' | 'unlink'

type EventName = DirectoryEventName | FileEventName

type RefreshCache = (eventName: EventName, path: string) => void

type GetRefreshCacheProps = {
  readonly cacheMap: CacheMap
  readonly cwd: string
  readonly fileContentHashMap: FileContentHashMap
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type GetRefreshCache = (props: GetRefreshCacheProps) => RefreshCache

type GetWatchedWorkspaceProps = {
  readonly cacheKey: CacheKey
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type GetWatchedWorkspace = (props: GetWatchedWorkspaceProps) => WatchedWorkspace

type WorkspaceDirectoryPath = string

type GetWorkspaceDirectoryPathProps = {
  readonly path: string
}

type GetWorkspaceDirectoryPath = (props: GetWorkspaceDirectoryPathProps) => WorkspaceDirectoryPath

type RefreshCacheInternalProps = {
  readonly acceptedEvents: AcceptedEvents
  readonly cacheKey: CacheKey
  readonly cacheMap: CacheMap
  readonly cwd: string
  readonly eventName: EventName
  readonly fileContentHashMap: FileContentHashMap
  readonly path: string
  readonly posixPath: PosixPath
  readonly watchedWorkspace: WatchedWorkspaceNonNullable
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type RefreshCacheInternal = (props: RefreshCacheInternalProps) => void

type RefreshCacheInternalRefreshProps = {
  readonly cacheKey: CacheKey
  readonly cacheMap: CacheMap
  readonly cwd: string
  readonly eslintConfigPath: ESLintConfigPath
  readonly eventName: EventName
  readonly posixPath: PosixPath
  readonly refreshedFromRoot?: boolean
  readonly userOptions: UserOptions
}

type RefreshCacheInternalRefresh = (props: RefreshCacheInternalRefreshProps) => void

type RefreshESLintProps = {
  readonly cwd: string
  readonly eslintConfigPath: ESLintConfigPath
}

type RefreshESLint = (props: RefreshESLintProps) => void

type ResolveCacheKeyProps = {
  readonly workspaceDirectoryPath: WorkspaceDirectoryPath
}

type ResolveCacheKey = (props: ResolveCacheKeyProps) => CacheKey

export type {
  EventName,
  FileEventName,
  GetAcceptedEvents,
  GetCache,
  GetCacheKeyFromPath,
  GetFormattedEventName,
  GetIsPathInBaseDirectory,
  GetIsTurboEventIgnored,
  GetPosixPath,
  GetPrettyChangedPath,
  GetRefreshCache,
  GetWatchedWorkspace,
  GetWorkspaceDirectoryPath,
  PosixPath,
  RefreshCacheInternal,
  RefreshCacheInternalRefresh,
  RefreshESLint,
  ResolveCacheKey
}
