import type { GetPrettyCacheKey } from './types'

const getPrettyCacheKey: GetPrettyCacheKey = function ({ cacheKey }) {
  if (!cacheKey.startsWith('.')) {
    return cacheKey
  }

  return cacheKey.replace('.', '<root>')
}

export { getPrettyCacheKey }
