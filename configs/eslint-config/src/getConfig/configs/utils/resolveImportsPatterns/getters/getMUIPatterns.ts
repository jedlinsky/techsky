import {
  joinModuleNames,
  negativeLookaheadPattern,
  regex,
  regexPattern
} from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { GetMUIPatterns } from './types'

const getMUIPatterns: GetMUIPatterns = function () {
  const base = `@mui${regex.forwardSlash}`
  const core = joinModuleNames(['base', 'joy', 'material', 'system'])
  const icons = 'icons-material'

  return [
    `${base}${core}${regexPattern.nestedOrEnd}`,
    `${base}${negativeLookaheadPattern(icons)}${regexPattern.anyOrEnd}`,
    `${base}${icons}${regexPattern.nestedOrEnd}`
  ]
}

export { getMUIPatterns }
