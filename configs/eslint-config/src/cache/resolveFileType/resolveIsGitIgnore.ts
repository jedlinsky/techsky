import type { ResolveIsGitIgnore } from './types'

const resolveIsGitIgnore: ResolveIsGitIgnore = function ({ fileName }) {
  return fileName === '.gitignore'
}

export { resolveIsGitIgnore }
