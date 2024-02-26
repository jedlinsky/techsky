import { basename } from 'node:path/posix'
import type { GetConfigFileName } from './types'

const getConfigFileName: GetConfigFileName = function ({ eslintConfigPath }) {
  return basename(eslintConfigPath)
}

export { getConfigFileName }
