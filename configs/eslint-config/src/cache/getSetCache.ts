import type { GetSetCache } from './types'

const getSetCache: GetSetCache = function ({ cacheKey, cacheMap }) {
  return function (config) {
    cacheMap.set(cacheKey, config)

    return config
  }
}

export { getSetCache }
