import type { ResolveSingleQuote } from './types.js'

const resolveSingleQuote: ResolveSingleQuote = function (config) {
  if (config.quote_type === undefined) {
    return
  }

  if (config.quote_type === 'single') {
    return true
  }

  if (config.quote_type === 'double') {
    return false
  }
}

export { resolveSingleQuote }
