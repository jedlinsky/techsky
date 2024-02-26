import { resolveType } from './resolveType.js'
import type { Logger } from './types.js'

const logger: Logger = function ({ silent, text, type: format }) {
  if (silent) {
    return
  }

  const type = resolveType({ format })

  console.log(type, `\x1b[1m${text}\x1b[22m`)
}

export { logger }
