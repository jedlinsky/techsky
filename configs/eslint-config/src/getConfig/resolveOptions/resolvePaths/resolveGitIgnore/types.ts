import type { Path, ResolvePath } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'

type GitIgnore = Path<'common'>

type ResolveGitIgnore = () => GitIgnore

type GitIgnoreWorkspace = Path<'common'>

type ResolveGitIgnoreWorkspaceProps = {
  readonly resolvePath: ResolvePath
}

type ResolveGitIgnoreWorkspace = (props: ResolveGitIgnoreWorkspaceProps) => GitIgnoreWorkspace

type ProjectAbsolutePath = string

type ResolveProjectAbsolutePath = () => ProjectAbsolutePath

export type { GitIgnore, GitIgnoreWorkspace, ResolveGitIgnore, ResolveGitIgnoreWorkspace, ResolveProjectAbsolutePath }
