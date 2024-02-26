import type { FileEventName } from 'cache/getRefreshCache/types'
import type { CacheKey, FileContentHashes, FileContentHashesNonNullable, FileContentHashMap } from 'cache/types'

type FileContentHash = string | null

type CreateFileContentHashProps = {
  readonly cwd: string
  readonly path: string
}

type CreateFileContentHash = (props: CreateFileContentHashProps) => FileContentHash

type GetFileContentHashProps = {
  readonly fileContentHashes: FileContentHashes
  readonly fileName: string
}

type GetFileContentHash = (props: GetFileContentHashProps) => FileContentHash

type GetFileContentHashesProps = {
  readonly cacheKey: CacheKey
  readonly fileContentHashMap: FileContentHashMap
}

type GetFileContentHashes = (props: GetFileContentHashesProps) => FileContentHashes

type FileContentHashesWithoutCurrentFile = FileContentHashes

type GetFileContentHashesWithoutCurrentFileProps = {
  readonly fileContentHashes: FileContentHashesNonNullable
  readonly fileName: string
}

type GetFileContentHashesWithoutCurrentFile = (
  props: GetFileContentHashesWithoutCurrentFileProps
) => FileContentHashesWithoutCurrentFile

type Unlink = ResolvedFileContentHash

type HandleUnlinkProps = {
  readonly cacheKey: CacheKey
  readonly fileContentHashes: FileContentHashes
  readonly fileContentHashMap: FileContentHashMap
  readonly fileName: string
}

type HandleUnlink = (props: HandleUnlinkProps) => Unlink

type ResolvedFileContentHash = {
  readonly fileContentHash: string | null
  readonly isChanged: boolean
}

type ResolveFileContentHashProps = {
  readonly cacheKey: CacheKey
  readonly cwd: string
  readonly eventName: FileEventName
  readonly fileContentHashMap: FileContentHashMap
  readonly path: string
}

type ResolveFileContentHash = (props: ResolveFileContentHashProps) => ResolvedFileContentHash

type SettedFileContentHash = {
  readonly isChanged: boolean
}

type SetFileContentHashProps = {
  readonly cacheKey: CacheKey
  readonly fileContentHashes: FileContentHashes
  readonly fileContentHashMap: FileContentHashMap
  readonly fileName: string
  readonly nextFileContentHash: FileContentHash
  readonly previousFileContentHash: FileContentHash
}

type SetFileContentHash = (props: SetFileContentHashProps) => SettedFileContentHash

type SetNewHashesProps = {
  readonly cacheKey: CacheKey
  readonly fileContentHashMap: FileContentHashMap
  readonly fileName: string
  readonly nextFileContentHash: FileContentHash
}

type SetNewHashes = (props: SetNewHashesProps) => void

type SetUpdatedHashProps = {
  readonly cacheKey: CacheKey
  readonly fileContentHashes: FileContentHashesNonNullable
  readonly fileContentHashMap: FileContentHashMap
  readonly fileName: string
  readonly nextFileContentHash: FileContentHash
}

type SetUpdatedHash = (props: SetUpdatedHashProps) => void

type SetUpdatedHashDeleteProps = {
  readonly cacheKey: CacheKey
  readonly fileContentHashes: FileContentHashesNonNullable
  readonly fileContentHashMap: FileContentHashMap
  readonly fileName: string
}

type SetUpdatedHashDelete = (props: SetUpdatedHashDeleteProps) => void

type SetUpdatedHashUpdateProps = {
  readonly cacheKey: CacheKey
  readonly fileContentHashes: FileContentHashesNonNullable
  readonly fileContentHashMap: FileContentHashMap
  readonly fileName: string
  readonly nextFileContentHash: string
}

type SetUpdatedHashUpdate = (props: SetUpdatedHashUpdateProps) => void

export type {
  CreateFileContentHash,
  GetFileContentHash,
  GetFileContentHashes,
  GetFileContentHashesWithoutCurrentFile,
  HandleUnlink,
  ResolveFileContentHash,
  SetFileContentHash,
  SetNewHashes,
  SetUpdatedHash,
  SetUpdatedHashDelete,
  SetUpdatedHashUpdate
}
