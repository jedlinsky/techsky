import mem from 'mem'
import { getExplorerUnmemoized } from './getExplorerUnmemoized.js'

const getExplorer = mem(getExplorerUnmemoized, {
  cacheKey: ([options]) => options.cache
})

export { getExplorer }
