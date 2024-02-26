import type { Paths } from 'getConfig/resolveOptions/resolvePaths'
import type { ResolvedUserOptions } from 'getConfig/resolveOptions/resolveUserOptions'

type GitIgnore = string | null

type GetGitIgnoreProps = {
  readonly paths: Paths
}

type GetGitIgnore = (props: GetGitIgnoreProps) => GitIgnore

type GitIgnoreWorkspace = string | null

type GetGitIgnoreWorkspaceProps = {
  readonly paths: Paths
}

type GetGitIgnoreWorkspace = (props: GetGitIgnoreWorkspaceProps) => GitIgnoreWorkspace

type ParsedGitIgnorePatterns = readonly string[]

type ParseGitIgnorePatternsProps = {
  readonly resolvedGitIgnore: string
}

type ParseGitIgnorePatterns = (props: ParseGitIgnorePatternsProps) => ParsedGitIgnorePatterns

type ResolvedGitIgnore = string | null

type ResolveGitIgnoreProps = {
  readonly gitIgnore: GitIgnore
  readonly gitIgnoreWorkspace: GitIgnoreWorkspace
}

type ResolveGitIgnore = (props: ResolveGitIgnoreProps) => ResolvedGitIgnore

type GitIgnorePatterns = readonly string[] | null

type ResolveGitIgnorePatternsProps = {
  readonly ignoreGitIgnored: ResolvedUserOptions['ignoreGitIgnored']
  readonly paths: Paths
}

type ResolveGitIgnorePatterns = (props: ResolveGitIgnorePatternsProps) => GitIgnorePatterns

export type {
  GetGitIgnore,
  GetGitIgnoreWorkspace,
  GitIgnorePatterns,
  ParseGitIgnorePatterns,
  ResolveGitIgnore,
  ResolveGitIgnorePatterns
}
