import type { ResolveIsProjectRoot } from './types'

const resolveIsProjectRoot: ResolveIsProjectRoot = function ({ paths }) {
  return paths.root.absolute === paths.cwd
}

export { resolveIsProjectRoot }
