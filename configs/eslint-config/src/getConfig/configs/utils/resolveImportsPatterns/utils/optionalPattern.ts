import type { OptionalPattern } from './types'

const optionalPattern: OptionalPattern = function (pattern) {
  return `(${pattern})?`
}

export { optionalPattern }
