import { getPathResolver } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import { resolveProjectAbsolutePath } from './resolveProjectAbsolutePath'
import type { ResolveGitIgnore } from './types'

const resolveGitIgnore: ResolveGitIgnore = function () {
  const projectAbsolutePath = resolveProjectAbsolutePath()

  const resolvePath = getPathResolver({ cwd: projectAbsolutePath })

  return resolvePath('./.gitignore')
}

export { resolveGitIgnore }
