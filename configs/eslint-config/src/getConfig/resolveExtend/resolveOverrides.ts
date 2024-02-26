import { resolveOverridesRules } from './resolveOverridesRules'
import type { ResolveOverrides } from './types'

const resolveOverrides: ResolveOverrides = function ({ config, extend }) {
  const mergedOverrides = [...config.overrides, ...(extend.overrides ?? [])]

  return mergedOverrides.map((override) => {
    const rules = resolveOverridesRules({
      extendRules: extend.rules,
      rules: override.rules
    })

    return {
      ...override,
      ...(rules ? { rules } : {})
    }
  })
}

export { resolveOverrides }
