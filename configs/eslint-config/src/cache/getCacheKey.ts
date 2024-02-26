import { dirname } from 'node:path/posix'
import type { GetCacheKey } from './types'

const getCacheKey: GetCacheKey = function ({ eslintConfigPath }) {
  return dirname(eslintConfigPath)
}

export { getCacheKey }
