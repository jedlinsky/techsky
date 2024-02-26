import { cosmiconfigSync } from 'cosmiconfig'
import { transform } from './transform/index.js'
import { loaders } from './loaders.js'
import { searchPlaces } from './searchPlaces.js'
import type { GetExplorer } from './types.js'

const getExplorerUnmemoized: GetExplorer = function (options) {
  return cosmiconfigSync('prettier', {
    cache: options.cache,
    loaders,
    searchPlaces,
    searchStrategy: 'global',
    transform
  })
}

export { getExplorerUnmemoized }
