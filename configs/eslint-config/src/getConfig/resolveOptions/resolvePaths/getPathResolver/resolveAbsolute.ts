import { resolve } from 'node:path'
import type { ResolveAbsolute } from './types'

const resolveAbsolute: ResolveAbsolute = function ({ cwd, relative, rootRelative }) {
  if (rootRelative) {
    return resolve(cwd, rootRelative, relative)
  }

  return resolve(cwd, relative)
}

export { resolveAbsolute }
