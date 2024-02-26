import { existsSync } from 'node:fs'
import type { ResolveIsTurborepo } from './types'

const resolveIsTurborepo: ResolveIsTurborepo = function ({ isMonorepo, paths, rootDependencies }) {
  if (!isMonorepo) {
    return false
  }

  const hasTurboDependency = 'turbo' in rootDependencies
  const turboConfigExists = existsSync(paths.turboConfig.absolute)

  return hasTurboDependency && turboConfigExists
}

export { resolveIsTurborepo }
