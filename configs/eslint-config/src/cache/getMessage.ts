import { getPrettyCacheKey } from './getPrettyCacheKey'
import type { GetMessage } from './types'

const getMessage: GetMessage = function ({ cacheKey, configFileName = '.eslintrc.cjs', type }) {
  const prettyCacheKey = getPrettyCacheKey({ cacheKey })

  return `${type === 'loaded' ? 'Loaded' : 'Refreshed'} config for: ${prettyCacheKey}${
    type === 'refreshedConfigFile' ? ` (changed file "${configFileName}")` : ''
  }`
}

export { getMessage }
