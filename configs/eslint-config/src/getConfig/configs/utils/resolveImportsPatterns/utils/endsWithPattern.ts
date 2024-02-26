import { regex } from './regex'
import { regexPattern } from './regexPattern'
import type { EndsWithPattern } from './types'

const endsWithPattern: EndsWithPattern = function ({ pattern, prependDot = false }) {
  return `.*${prependDot ? regex.dot : ''}${pattern}${regexPattern.end}`
}

export { endsWithPattern }
