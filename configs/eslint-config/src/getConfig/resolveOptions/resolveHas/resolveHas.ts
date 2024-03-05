import { resolveHasNextJS } from './resolveHasNextJS'
import { resolveHasOption } from './resolveHasOption'
import { resolveHasPackage } from './resolveHasPackage'
import { resolveHasRule } from './resolveHasRule'
import { resolveHasTypescript } from './resolveHasTypescript'
import type { ResolveHas } from './types'

const resolveHas: ResolveHas = function ({ dependencies, packageJson, parsedTSConfig, paths, userOptions }) {
  const hasOption = resolveHasOption(userOptions)
  const hasPackage = resolveHasPackage({ dependencies })
  const hasNextJS = resolveHasNextJS({ hasPackage, packageJson, parsedTSConfig })
  const hasRule = resolveHasRule(userOptions)
  const hasTypescript = resolveHasTypescript({ paths })

  return {
    nextJS: hasNextJS,
    option: hasOption,
    package: hasPackage,
    rule: hasRule,
    typescript: hasTypescript
  }
}

export { resolveHas }
