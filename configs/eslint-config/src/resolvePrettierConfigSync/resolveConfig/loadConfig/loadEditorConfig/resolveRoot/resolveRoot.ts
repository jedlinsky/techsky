import path from 'node:path'
import { findProjectRoot } from './findProjectRoot.js'
import type { ResolveRoot } from './types.js'

const resolveRoot: ResolveRoot = function (filePath) {
  return findProjectRoot(path.dirname(path.resolve(filePath)))
}

export { resolveRoot }
