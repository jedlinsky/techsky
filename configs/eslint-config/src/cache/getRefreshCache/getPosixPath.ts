import { sep } from 'node:path'
import type { GetPosixPath } from './types'

const getPosixPath: GetPosixPath = function ({ path }) {
  return path.split(sep).join('/')
}

export { getPosixPath }
