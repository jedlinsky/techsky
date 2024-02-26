import { optionalPattern, regex, regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { GetParentImportPatterns } from './types'

const getParentImportPatterns: GetParentImportPatterns = function () {
  return [
    `${regex.dot}${regex.dot}${regexPattern.notAbsolute}`,
    `${regex.dot}${regex.dot}${optionalPattern(regex.forwardSlash)}${regexPattern.end}`
  ]
}

export { getParentImportPatterns }
