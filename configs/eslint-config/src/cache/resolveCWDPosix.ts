import { sep } from 'node:path'
import type { ResolveCWDPosix } from './types'

const resolveCWDPosix: ResolveCWDPosix = function ({ cwd }) {
  return cwd.split(sep).join('/')
}

export { resolveCWDPosix }
