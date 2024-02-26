import { join } from 'node:path/posix'
import { resolveCurrentDirectoryNotation } from './resolveCurrentDirectoryNotation'
import type { ResolveBaseRoot } from './types'

const resolveBaseRoot: ResolveBaseRoot = function ({
  baseRelative,
  currentDirectoryNotation,
  relative,
  relativeEqualsBase,
  rootRelative
}) {
  if (baseRelative === undefined || rootRelative === undefined) {
    return null
  }

  const withBaseRoot = relativeEqualsBase
    ? join(rootRelative, baseRelative)
    : join(rootRelative, baseRelative, relative)

  return resolveCurrentDirectoryNotation({ currentDirectoryNotation, path: withBaseRoot })
}

export { resolveBaseRoot }
