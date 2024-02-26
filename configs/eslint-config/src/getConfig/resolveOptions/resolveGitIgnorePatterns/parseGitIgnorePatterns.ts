import { parse as parseGitIgnore } from 'parse-gitignore'
import type { ParseGitIgnorePatterns } from './types'

const parseGitIgnorePatterns: ParseGitIgnorePatterns = function ({ resolvedGitIgnore }) {
  const { patterns } = parseGitIgnore(resolvedGitIgnore)

  return [...new Set(patterns)]
}

export { parseGitIgnorePatterns }
