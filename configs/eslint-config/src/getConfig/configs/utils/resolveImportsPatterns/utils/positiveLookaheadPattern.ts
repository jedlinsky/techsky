import { regex } from './regex'
import type { PositiveLookaheadPattern } from './types'

const positiveLookaheadPattern: PositiveLookaheadPattern = function (pattern) {
  return `(${regex.positiveLookahead}${pattern})`
}

export { positiveLookaheadPattern }
