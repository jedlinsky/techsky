type FileType = 'gitIgnore' | 'packageJson' | 'pnpmWorkspace' | 'prettier' | 'tsConfig' | 'turbo' | 'unknown'

type ResolveFileTypeProps = {
  readonly path: string
}

type ResolveFileType = (props: ResolveFileTypeProps) => FileType

type ResolvedFunction = boolean

type ResolveFunctionProps = {
  readonly fileName: string
}

type ResolveFunction = (props: ResolveFunctionProps) => ResolvedFunction

type ResolveIsGitIgnore = ResolveFunction

type ResolveIsPackageJson = ResolveFunction

type ResolveIsPnpmWorkspace = ResolveFunction

type ResolveIsPrettier = ResolveFunction

type ResolveIsTSConfig = ResolveFunction

type ResolveIsTurbo = ResolveFunction

export type {
  FileType,
  ResolveFileType,
  ResolveIsGitIgnore,
  ResolveIsPackageJson,
  ResolveIsPnpmWorkspace,
  ResolveIsPrettier,
  ResolveIsTSConfig,
  ResolveIsTurbo
}
