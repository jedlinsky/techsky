import { INDENT_SPACES } from './constants.js'
import type { GetIndent } from './types.js'

const getIndent: GetIndent = function () {
  return ' '.repeat(INDENT_SPACES)
}

export { getIndent }
