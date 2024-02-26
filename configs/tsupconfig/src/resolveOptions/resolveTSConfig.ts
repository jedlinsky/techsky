import { resolve } from 'node:path/posix'
import { parseTsconfig as parseTSConfig } from 'get-tsconfig'
import type { ResolveTSConfig } from './types.js'

const resolveTSConfig: ResolveTSConfig = function () {
  return parseTSConfig(resolve('tsconfig.json'))
}

export { resolveTSConfig }
