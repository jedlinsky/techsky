import type { ResolveGitIgnore } from './types'

const resolveGitIgnore: ResolveGitIgnore = function ({ gitIgnore, gitIgnoreWorkspace }) {
  if (gitIgnore === null && gitIgnoreWorkspace === null) {
    return null
  }

  if (gitIgnore !== null && gitIgnoreWorkspace !== null) {
    return [gitIgnore, gitIgnoreWorkspace].join('\n')
  }

  if (gitIgnore !== null) {
    return gitIgnore
  }

  if (gitIgnoreWorkspace !== null) {
    return gitIgnoreWorkspace
  }

  return null
}

export { resolveGitIgnore }
