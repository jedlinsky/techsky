import type { GetPrettyChangedPath } from './types'

const getPrettyChangedPath: GetPrettyChangedPath = function ({ cacheKey, posixPath }) {
  const cacheKeyWithoutCurrentDirectoryNotation = cacheKey.startsWith('./') ? cacheKey.replace('./', '') : cacheKey

  return posixPath.replace(`${cacheKeyWithoutCurrentDirectoryNotation}/`, '')
}

export { getPrettyChangedPath }
