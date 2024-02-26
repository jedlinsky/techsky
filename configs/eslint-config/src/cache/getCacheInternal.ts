import { isDeepStrictEqual } from 'node:util'
import type { GetCacheInternal } from './types'

const getCacheInternal: GetCacheInternal = function ({ cacheKey, cacheMap, userOptions, userOptionsMap }) {
  const previousUserOptions = userOptionsMap.get(cacheKey)

  const isEqual = isDeepStrictEqual(previousUserOptions, userOptions)

  if (!isEqual) {
    userOptionsMap.set(cacheKey, userOptions)

    return null
  }

  return cacheMap.get(cacheKey) ?? null
}

export { getCacheInternal }
