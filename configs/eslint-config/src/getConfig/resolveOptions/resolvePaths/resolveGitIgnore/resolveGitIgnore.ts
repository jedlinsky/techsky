import { getPathResolver } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { ResolveGitIgnore } from './types'

const resolvePath = getPathResolver()

const resolveGitIgnore: ResolveGitIgnore = function () {
  return resolvePath('./.gitignore')
}

export { resolveGitIgnore }
