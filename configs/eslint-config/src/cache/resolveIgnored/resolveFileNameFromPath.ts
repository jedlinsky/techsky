import { basename } from 'node:path/posix'
import type { ResolveFileNameFromPath } from './types'

const resolveFileNameFromPath: ResolveFileNameFromPath = function ({ path }) {
  return basename(path)
}

export { resolveFileNameFromPath }
