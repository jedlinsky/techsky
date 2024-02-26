import { resolveBaseGeneric } from './resolveBaseGeneric'
import type { ResolveBase } from './types'

const resolveBase: ResolveBase = function ({ baseUrl, cwd, root, tsConfigBase, tsConfigHasBaseUrl }) {
  if (tsConfigHasBaseUrl) {
    return tsConfigBase
  }

  if (baseUrl !== undefined) {
    return resolveBaseGeneric({ baseUrl, cwd, root })
  }

  return tsConfigBase
}

export { resolveBase }
