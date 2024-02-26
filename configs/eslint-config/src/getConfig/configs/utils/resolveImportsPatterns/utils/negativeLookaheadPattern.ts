import { regex } from './regex'
import type { NegativeLookaheadPattern } from './types'

const negativeLookaheadPattern: NegativeLookaheadPattern = function (pattern) {
  return `(${regex.negativeLookahead}${pattern})`
}

export { negativeLookaheadPattern }
