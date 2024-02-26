import { inspect } from 'node:util'
import type { StyleValue } from './types.js'

const styleValue: StyleValue = function (value) {
  return inspect(value, { colors: true })
}

export { styleValue }
