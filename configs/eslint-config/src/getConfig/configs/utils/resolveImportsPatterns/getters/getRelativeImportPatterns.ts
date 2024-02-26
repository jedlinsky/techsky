import {
  optionalPattern,
  positiveLookaheadPattern,
  regex,
  regexPattern
} from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { GetRelativeImportPatterns } from './types'

const getRelativeImportPatterns: GetRelativeImportPatterns = function () {
  return [
    `${regex.dot}${regex.forwardSlash}${positiveLookaheadPattern(`.*${regex.forwardSlash}`)}${
      regexPattern.notAbsolute
    }`,
    `${regex.dot}${regexPattern.notAbsolute}`,
    `${regex.dot}${optionalPattern(regex.forwardSlash)}${regexPattern.end}`
  ]
}

export { getRelativeImportPatterns }
