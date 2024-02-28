import { importExtension, useDirective } from './plugins/index.js'
import type { ResolvePlugins } from './types.js'

const resolvePlugins: ResolvePlugins = function () {
  return [importExtension(), useDirective()]
}

export { resolvePlugins }
