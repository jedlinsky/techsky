import { getPathResolver } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { ResolveTurboConfig } from './types'

const resolvePath = getPathResolver()

const resolveTurboConfig: ResolveTurboConfig = function () {
  return resolvePath('./turbo.json')
}

export { resolveTurboConfig }
