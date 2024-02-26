import type { PrependStartPattern } from './types'

const prependStartPattern: PrependStartPattern = function (pattern) {
  if (pattern.startsWith('^')) {
    return pattern
  }

  return `^${pattern}`
}

export { prependStartPattern }
