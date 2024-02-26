import type { Config } from 'getConfig'
import type { ResolveOverridesRules } from './types'

const resolveOverridesRules: ResolveOverridesRules = function ({ extendRules, rules }) {
  if (!rules) {
    return null
  }

  if (!extendRules) {
    return rules
  }

  return Object.entries(rules).reduce<Config['rules']>(
    (accumulator, [name, value]) => ({
      ...accumulator,
      [name]: name in extendRules ? extendRules[name] : value
    }),
    {}
  )
}

export { resolveOverridesRules }
