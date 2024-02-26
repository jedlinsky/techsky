import type { ResolveGitIgnoreWorkspace } from './types'

const resolveGitIgnoreWorkspace: ResolveGitIgnoreWorkspace = function ({ resolvePath }) {
  return resolvePath.withRoot('./.gitignore')
}

export { resolveGitIgnoreWorkspace }
