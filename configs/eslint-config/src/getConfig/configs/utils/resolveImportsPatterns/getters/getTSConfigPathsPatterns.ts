import { regexPattern } from 'getConfig/configs/utils/resolveImportsPatterns/utils'
import type { GetTSConfigPathsPatterns } from './types'

const getTSConfigPathsPatterns: GetTSConfigPathsPatterns = function (tsConfigPaths) {
  return tsConfigPaths.map((tsConfigPath) => `${tsConfigPath}${regexPattern.nestedOrEnd}`)
}

export { getTSConfigPathsPatterns }
