import { join } from 'node:path/posix'
import { resolveCurrentDirectoryNotation } from './resolveCurrentDirectoryNotation'
import type { ResolveRoot } from './types'

const resolveRoot: ResolveRoot = function ({ currentDirectoryNotation, relative, rootRelative }) {
  if (rootRelative === undefined) {
    return null
  }

  const withRoot = relative === './' ? rootRelative : join(rootRelative, relative)

  return resolveCurrentDirectoryNotation({ currentDirectoryNotation, path: withRoot })
}

export { resolveRoot }
