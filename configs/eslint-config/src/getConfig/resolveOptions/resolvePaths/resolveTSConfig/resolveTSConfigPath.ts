import { getPathResolver } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { ResolveTSConfigPath } from './types'

const resolveTSConfigPath: ResolveTSConfigPath = function ({ cwd, root, tsConfigPath }) {
  const resolvePath = getPathResolver({ cwd, rootRelative: root.relative })

  return resolvePath(tsConfigPath)
}

export { resolveTSConfigPath }
