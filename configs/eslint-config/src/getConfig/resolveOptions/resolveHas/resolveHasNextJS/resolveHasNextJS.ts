import { resolvePackageJson } from './resolvePackageJson'
import { resolveTSConfigDisplay } from './resolveTSConfigDisplay'
import type { ResolveHasNextJS } from './types'

const resolveHasNextJS: ResolveHasNextJS = function ({ hasPackage, packageJson, parsedTSConfig }) {
  if (!hasPackage.next) {
    return false
  }

  return resolvePackageJson({ packageJson }) || resolveTSConfigDisplay({ parsedTSConfig })
}

export { resolveHasNextJS }
