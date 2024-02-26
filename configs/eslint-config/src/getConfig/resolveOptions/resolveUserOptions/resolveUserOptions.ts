import { defaultUserOptions } from './defaultUserOptions'
import { resolveUserOptionsPaths } from './resolveUserOptionsPaths'
import { resolveUserOptionsRules } from './resolveUserOptionsRules'
import type { ResolveUserOptions } from './types'

const resolveUserOptions: ResolveUserOptions = function (userOptions) {
  const userOptionsPaths = resolveUserOptionsPaths(userOptions)
  const rules = resolveUserOptionsRules(userOptions)

  return {
    ...defaultUserOptions,
    ...userOptions,
    ...userOptionsPaths,
    rules
  }
}

export { resolveUserOptions }
