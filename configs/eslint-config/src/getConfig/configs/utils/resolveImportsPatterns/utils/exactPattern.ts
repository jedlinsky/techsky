import { regex } from './regex'
import { regexPattern } from './regexPattern'
import type { ExactPattern } from './types'

const exactPattern: ExactPattern = function ({ isSideEffect = false, moduleName }) {
  return `${isSideEffect ? regex.null : ''}${moduleName}${regexPattern.end}`
}

export { exactPattern }
