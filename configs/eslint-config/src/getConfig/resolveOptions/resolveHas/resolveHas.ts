import { resolveHasOption } from './resolveHasOption'
import { resolveHasPackage } from './resolveHasPackage'
import { resolveHasRule } from './resolveHasRule'
import { resolveHasTypescript } from './resolveHasTypescript'
import type { ResolveHas } from './types'

const resolveHas: ResolveHas = function ({ dependencies, paths, userOptions }) {
  const hasOption = resolveHasOption(userOptions)
  const hasPackage = resolveHasPackage({ dependencies })
  const hasRule = resolveHasRule(userOptions)
  const hasTypescript = resolveHasTypescript({ paths })

  return {
    option: hasOption,
    package: hasPackage,
    rule: hasRule,
    typescript: hasTypescript
  }
}

export { resolveHas }
