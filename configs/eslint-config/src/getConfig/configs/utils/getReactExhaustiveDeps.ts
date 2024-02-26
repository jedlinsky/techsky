import type { DefinedOptions } from 'getConfig'
import type { GetReactExhaustiveDeps } from './types'

const getReactExhaustiveDeps: GetReactExhaustiveDeps = function (options) {
  if (!options.has.rule.additionalReactHooks) {
    return 'error'
  }

  return [
    'error',
    {
      additionalHooks: `(${(options as DefinedOptions).rules.additionalReactHooks.join('|')})`
    }
  ]
}

export { getReactExhaustiveDeps }
