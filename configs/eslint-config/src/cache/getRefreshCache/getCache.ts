import { getCacheKeyFromPath } from './getCacheKeyFromPath'
import type { GetCache } from './types'

const getCache: GetCache = function ({ cacheMap, posixPath }) {
  const { cacheKey, cacheKeyFallback } = getCacheKeyFromPath({ posixPath })

  const config = cacheMap.get(cacheKey)

  if (config) {
    return {
      cacheKey,
      config
    }
  }

  const configFallback = cacheMap.get(cacheKeyFallback)

  if (configFallback) {
    return {
      cacheKey: cacheKeyFallback,
      config: configFallback
    }
  }

  return null
}

export { getCache }
