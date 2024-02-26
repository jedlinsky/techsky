import type { FileType } from 'cache/resolveFileType'

type AbsolutePath = string

type FileContent = Record<string, unknown> | readonly string[] | null

type GetFileContentProps = {
  readonly absolutePath: AbsolutePath
  readonly cwd: string
  readonly fileType: FileType
}

type GetFileContent = (props: GetFileContentProps) => FileContent

type File = string | null

type ReadFileProps = {
  readonly absolutePath: AbsolutePath
}

type ReadFile = (props: ReadFileProps) => File

type JsonFileNonNullable = Record<string, unknown>

type JsonFile = JsonFileNonNullable | null

type ReadJsonFileProps = {
  readonly absolutePath: AbsolutePath
}

type ReadJsonFile = (props: ReadJsonFileProps) => JsonFile

type ResolveFileContentProps = {
  readonly cwd: string
  readonly path: string
}

type ResolveFileContent = (props: ResolveFileContentProps) => FileContent

type GitIgnore = readonly string[] | null

type ResolveGitIgnoreProps = {
  readonly absolutePath: AbsolutePath
}

type ResolveGitIgnore = (props: ResolveGitIgnoreProps) => GitIgnore

type PnpmWorkspacePackages = readonly string[]

type PnpmWorkspaceFile = {
  readonly packages?: PnpmWorkspacePackages
}

type PnpmWorkspace = readonly string[] | null

type ResolvePnpmWorkspaceProps = {
  readonly absolutePath: string
}

type ResolvePnpmWorkspace = (props: ResolvePnpmWorkspaceProps) => PnpmWorkspace

type Prettier = Record<string, unknown> | null

type ResolvePrettierProps = {
  readonly absolutePath: AbsolutePath
  readonly cwd: string
}

type ResolvePrettier = (props: ResolvePrettierProps) => Prettier

type TSConfig = Record<string, unknown> | null

type ResolveTSConfigProps = {
  readonly absolutePath: AbsolutePath
}

type ResolveTSConfig = (props: ResolveTSConfigProps) => TSConfig

export type {
  GetFileContent,
  JsonFileNonNullable,
  PnpmWorkspaceFile,
  PnpmWorkspacePackages,
  ReadFile,
  ReadJsonFile,
  ResolveFileContent,
  ResolveGitIgnore,
  ResolvePnpmWorkspace,
  ResolvePrettier,
  ResolveTSConfig
}
