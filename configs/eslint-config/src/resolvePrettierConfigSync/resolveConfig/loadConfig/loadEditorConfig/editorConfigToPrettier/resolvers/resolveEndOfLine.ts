import { endOfLineTypes } from './endOfLineTypes.js'
import type { ResolveEndOfLine } from './types.js'

const resolveEndOfLine: ResolveEndOfLine = function (config) {
  if (config.end_of_line === undefined) {
    return
  }

  if (endOfLineTypes.includes(config.end_of_line)) {
    return config.end_of_line
  }
}

export { resolveEndOfLine }
