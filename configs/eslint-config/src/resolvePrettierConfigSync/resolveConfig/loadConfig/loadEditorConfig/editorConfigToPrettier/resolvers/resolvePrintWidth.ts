import type { ResolvePrintWidth } from './types.js'

const resolvePrintWidth: ResolvePrintWidth = function (config) {
  if (config.max_line_length === undefined) {
    return
  }

  if (config.max_line_length === 'off') {
    return Number.POSITIVE_INFINITY
  }

  return config.max_line_length
}

export { resolvePrintWidth }
