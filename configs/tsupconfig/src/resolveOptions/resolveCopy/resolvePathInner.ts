import { resolvePathCurrentDirectoryNotation } from './resolvePathCurrentDirectoryNotation.js'
import { resolvePathPrepend } from './resolvePathPrepend.js'
import type { ResolvePathInner } from './types.js'

const resolvePathInner: ResolvePathInner = function ({ path, prepend }) {
  const pathWitCurrentDirectoryNotation = resolvePathCurrentDirectoryNotation(path)

  return resolvePathPrepend(pathWitCurrentDirectoryNotation, prepend)
}

export { resolvePathInner }
