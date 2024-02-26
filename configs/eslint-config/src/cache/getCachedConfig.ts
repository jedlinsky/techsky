import { getConfig } from 'getConfig'
import { setInitialFileContentHashes } from './setInitialFileContentHashes'
import { setupCache } from './setupCache'
import type { GetCache, GetCachedConfig } from './types'

// eslint-disable-next-line functional/no-let, toplevel/no-toplevel-let
let getCache: GetCache | null = null

const getCachedConfig: GetCachedConfig = function ({ eslintConfigPath, userOptions }) {
  if (getCache === null) {
    // eslint-disable-next-line functional/no-expression-statements
    getCache = setupCache().getCache
  }

  const { cache, fileContentHashMap, message, setCache } = getCache({ eslintConfigPath, userOptions })

  if (cache) {
    return cache
  }

  const config = getConfig({ eslintConfigPath, userOptions })

  setInitialFileContentHashes({ eslintConfigPath, fileContentHashMap })

  console.log(message)

  return setCache(config)
}

export { getCachedConfig }
