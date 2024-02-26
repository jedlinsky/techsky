import { getGitIgnore } from './getGitIgnore'
import { getGitIgnoreWorkspace } from './getGitIgnoreWorkspace'
import { parseGitIgnorePatterns } from './parseGitIgnorePatterns'
import { resolveGitIgnore } from './resolveGitIgnore'
import type { ResolveGitIgnorePatterns } from './types'

const resolveGitIgnorePatterns: ResolveGitIgnorePatterns = function ({ ignoreGitIgnored, paths }) {
  if (!ignoreGitIgnored) {
    return null
  }

  const gitIgnore = getGitIgnore({ paths })
  const gitIgnoreWorkspace = getGitIgnoreWorkspace({ paths })

  const resolvedGitIgnore = resolveGitIgnore({ gitIgnore, gitIgnoreWorkspace })

  if (resolvedGitIgnore === null) {
    return null
  }

  return parseGitIgnorePatterns({ resolvedGitIgnore })
}

export { resolveGitIgnorePatterns }
