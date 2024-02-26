import { readFileSync } from 'node:fs'
import type { GetGitIgnoreWorkspace } from './types'

const getGitIgnoreWorkspace: GetGitIgnoreWorkspace = function ({ paths }) {
  try {
    return readFileSync(paths.gitIgnoreWorkspace.absolute, 'utf8')
  } catch {
    return null
  }
}

export { getGitIgnoreWorkspace }
