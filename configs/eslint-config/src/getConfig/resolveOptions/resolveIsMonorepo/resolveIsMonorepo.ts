import type { ResolveIsMonorepo } from './types'

const resolveIsMonorepo: ResolveIsMonorepo = function ({ paths }) {
  if (paths.workspaces === null) {
    return {
      isMonorepo: false,
      isMonorepoRoot: false
    }
  }

  return {
    isMonorepo: true,
    isMonorepoRoot: paths.root.relative === './'
  }
}

export { resolveIsMonorepo }
