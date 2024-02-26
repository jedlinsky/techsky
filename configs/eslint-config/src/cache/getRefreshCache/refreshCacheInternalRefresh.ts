import { getMessage } from 'cache/getMessage'
import { getConfig } from 'getConfig'
import { getFormattedEventName } from './getFormattedEventName'
import { getPrettyChangedPath } from './getPrettyChangedPath'
import { refreshESLint } from './refreshESLint'
import type { RefreshCacheInternalRefresh } from './types'

const refreshCacheInternalRefresh: RefreshCacheInternalRefresh = function ({
  cacheKey,
  cacheMap,
  cwd,
  eslintConfigPath,
  eventName,
  posixPath,
  refreshedFromRoot = false,
  userOptions
}) {
  const config = getConfig({ cwd, eslintConfigPath, userOptions })

  const message = getMessage({ cacheKey, type: 'refreshed' })

  const prettyChangedPath = getPrettyChangedPath({ cacheKey, posixPath })
  const formattedEventName = getFormattedEventName({ eventName })

  refreshESLint({ cwd, eslintConfigPath })

  cacheMap.set(cacheKey, config)

  console.log(
    message,
    `(${formattedEventName} "${prettyChangedPath}"${refreshedFromRoot ? ' in the root directory' : ''})`
  )
}

export { refreshCacheInternalRefresh }
