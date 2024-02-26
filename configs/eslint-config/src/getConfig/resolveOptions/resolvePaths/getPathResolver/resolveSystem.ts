import { posix, win32 } from 'node:path'
import type { ResolveSystem } from './types'

const resolveSystem: ResolveSystem = function ({ relative }) {
  return process.platform === 'win32' ? relative.split(posix.sep).join(win32.sep) : relative
}

export { resolveSystem }
