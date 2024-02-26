import { regexPattern } from './regexPattern'
import type { ModulePatterns } from './types'

const modulePatterns: ModulePatterns = function ({ moduleName, scopeFirst = false, withScope = false }) {
  const withNested = [`${moduleName}${regexPattern.end}`, `${moduleName}${regexPattern.nested}`]

  if (!withScope) {
    return withNested
  }

  const scope = `@${moduleName}${regexPattern.nested}`

  return scopeFirst ? [scope, ...withNested] : [...withNested, scope]
}

export { modulePatterns }
