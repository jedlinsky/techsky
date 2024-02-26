import util from 'node:util'
import type { Inspect } from './types.js'

const inspect: Inspect = function (content, depth = null) {
  return util.inspect(content, { colors: true, depth })
}

export { inspect }
