import { join } from 'node:path/posix'
import { resolveCurrentDirectoryNotation } from './resolveCurrentDirectoryNotation'
import type { ResolveBase } from './types'

const resolveBase: ResolveBase = function ({ baseRelative, currentDirectoryNotation, relative, relativeEqualsBase }) {
  if (baseRelative === undefined) {
    return null
  }

  const withBase = relativeEqualsBase ? baseRelative : join(baseRelative, relative)

  return resolveCurrentDirectoryNotation({ currentDirectoryNotation, path: withBase })
}

export { resolveBase }
