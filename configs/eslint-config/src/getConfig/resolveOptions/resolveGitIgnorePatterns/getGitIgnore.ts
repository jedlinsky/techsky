import { readFileSync } from 'node:fs'
import type { GetGitIgnore } from './types'

const getGitIgnore: GetGitIgnore = function ({ paths }) {
  try {
    return readFileSync(paths.gitIgnore.absolute, 'utf8')
  } catch {
    return null
  }
}

export { getGitIgnore }
