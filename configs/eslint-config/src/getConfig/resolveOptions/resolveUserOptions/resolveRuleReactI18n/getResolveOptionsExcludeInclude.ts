import { defaultOptions } from './defaultOptions'
import { resolveExcludeInclude } from './resolveExcludeInclude'
import type { GetResolveOptionsExcludeInclude } from './types'

const getResolveOptionsExcludeInclude: GetResolveOptionsExcludeInclude = function ({
  mergeWithDefault = defaultOptions.mergeWithDefault,
  ...props
}) {
  return function (key) {
    const defaultValue = defaultOptions[key]
    const value = props[key]

    if (value === undefined) {
      return defaultValue
    }

    if (!mergeWithDefault) {
      return value
    }

    return resolveExcludeInclude({ defaultValue, value })
  }
}

export { getResolveOptionsExcludeInclude }
