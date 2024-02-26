import type { CacheKey, CacheMap, CWDPosix } from 'cache/types'
import type { Config } from 'getConfig'

type CacheNonNullable = {
  readonly config: Config
  readonly isWorkspaceDirectory: boolean
}

type Cache = CacheNonNullable | null

type GetCacheProps = {
  readonly cacheMap: CacheMap
  readonly cwdPosix: string
  readonly isRootDirectory: boolean
  readonly path: string
}

type GetCache = (props: GetCacheProps) => Cache

type ResolveCacheKeyFromRelativePathProps = {
  readonly isRootDirectory: IsRootDirectory
  readonly relativePath: string
}

type ResolveCacheKeyFromRelativePath = (props: ResolveCacheKeyFromRelativePathProps) => CacheKey

type ExcludedFiles = boolean

type ResolveExcludedFilesProps = {
  readonly cache: CacheNonNullable
  readonly cwdPosix: CWDPosix
  readonly path: string
}

type ResolveExcludedFiles = (props: ResolveExcludedFilesProps) => ExcludedFiles

type FileName = string

type ResolveFileNameFromPathProps = {
  readonly path: string
}

type ResolveFileNameFromPath = (props: ResolveFileNameFromPathProps) => FileName

type Ignored = (path: string) => boolean

type ResolveIgnoredProps = {
  readonly cacheMap: CacheMap
  readonly cwdPosix: CWDPosix
}

type ResolveIgnored = (props: ResolveIgnoredProps) => Ignored

type IsPathBaseDirectory = boolean

type ResolveIsPathBaseDirectoryProps = {
  readonly cache: CacheNonNullable
  readonly cwdPosix: CWDPosix
  readonly path: string
}

type ResolveIsPathBaseDirectory = (props: ResolveIsPathBaseDirectoryProps) => IsPathBaseDirectory

type IsRootDirectory = boolean

type ResolveIsRootDirectoryProps = {
  readonly cwdPosix: CWDPosix
  readonly path: string
}

type ResolveIsRootDirectory = (props: ResolveIsRootDirectoryProps) => IsRootDirectory

type WatchFiles = readonly string[]

type ResolveWatchFilesProps = {
  readonly cwdPosix: CWDPosix
  readonly path: string
}

type ResolveWatchFiles = (props: ResolveWatchFilesProps) => WatchFiles

export type {
  GetCache,
  ResolveCacheKeyFromRelativePath,
  ResolveExcludedFiles,
  ResolveFileNameFromPath,
  ResolveIgnored,
  ResolveIsPathBaseDirectory,
  ResolveIsRootDirectory,
  ResolveWatchFiles
}
