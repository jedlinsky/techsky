import { useDirective } from './plugins/index.js'
import type { ResolvePlugins } from './types.js'

const resolvePlugins: ResolvePlugins = function () {
  return [useDirective()]
}

export { resolvePlugins }
