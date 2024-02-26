import type { EventName, PosixPath } from 'cache/getRefreshCache/types'
import type { FileType } from 'cache/resolveFileType'
import type {
  CacheKey,
  CacheMap,
  ESLintConfigPath,
  FileContentHashMap,
  UserOptions,
  WatchedWorkspaceNonNullable,
  WatchedWorkspacesMap
} from 'cache/types'

type FilterWatchedWorkspacesWithFileNamesProps = {
  readonly fileType: WorkspacesToRefreshFileType
  readonly watchedWorkspacesWithFileNames: WatchedWorkspacesWithFileNamesNonNullable
}

type FilterWatchedWorkspacesWithFileNames = (
  props: FilterWatchedWorkspacesWithFileNamesProps
) => WatchedWorkspacesWithFileNames

type IsDirectoryRoot = boolean

type GetIsDirectoryRootProps = {
  readonly cwd: string
  readonly path: string
}

type GetIsDirectoryRoot = (props: GetIsDirectoryRootProps) => IsDirectoryRoot

type WatchedWorkspaceFileNames = {
  readonly fileNames: readonly string[]
}

type WatchedWorkspaceWithFileNamesEntryValue = WatchedWorkspaceFileNames & WatchedWorkspaceNonNullable

type WatchedWorkspaceWithFileNamesEntry = readonly [string, WatchedWorkspaceWithFileNamesEntryValue]

type WatchedWorkspacesWithFileNamesNonNullable = readonly WatchedWorkspaceWithFileNamesEntry[]

type WatchedWorkspacesWithFileNames = WatchedWorkspacesWithFileNamesNonNullable | null

type GetWatchedWorkspacesWithFileNamesProps = {
  readonly fileContentHashMap: FileContentHashMap
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type GetWatchedWorkspacesWithFileNames = (
  props: GetWatchedWorkspacesWithFileNamesProps
) => WatchedWorkspacesWithFileNames

type WorkspaceToRefresh = {
  readonly cacheKey: CacheKey
  readonly eslintConfigPath: ESLintConfigPath
  readonly userOptions: UserOptions
}

type WorkspacesToRefreshNonNullable = readonly WorkspaceToRefresh[]

type WorkspacesToRefresh = WorkspacesToRefreshNonNullable | null

type WorkspacesToRefreshFileType = Exclude<FileType, 'tsConfig' | 'unknown'>

type GetWorkspacesToRefreshProps = {
  readonly fileContentHashMap: FileContentHashMap
  readonly fileType: WorkspacesToRefreshFileType
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type GetWorkspacesToRefresh = (props: GetWorkspacesToRefreshProps) => WorkspacesToRefresh

type RefreshWorkspacesProps = {
  readonly cacheMap: CacheMap
  readonly cwd: string
  readonly eventName: EventName
  readonly fileContentHashMap: FileContentHashMap
  readonly path: string
  readonly posixPath: PosixPath
  readonly watchedWorkspacesMap: WatchedWorkspacesMap
}

type RefreshWorkspaces = (props: RefreshWorkspacesProps) => void

type ResolveWorkspacesToRefreshProps = {
  readonly filteredWatchedWorkspacesWithFileNames: WatchedWorkspacesWithFileNamesNonNullable
}

type ResolveWorkspacesToRefresh = (props: ResolveWorkspacesToRefreshProps) => WorkspacesToRefreshNonNullable

export type {
  FilterWatchedWorkspacesWithFileNames,
  GetIsDirectoryRoot,
  GetWatchedWorkspacesWithFileNames,
  GetWorkspacesToRefresh,
  RefreshWorkspaces,
  ResolveWorkspacesToRefresh,
  WatchedWorkspacesWithFileNamesNonNullable
}
