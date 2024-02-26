import { resolveConfig } from 'resolvePrettierConfigSync'
import type { ResolvePrettierConfig } from './types'

const resolvePrettierConfig: ResolvePrettierConfig = function ({ paths }) {
  if (paths.prettierConfig === null) {
    return null
  }

  return resolveConfig(paths.cwd, {
    config: paths.prettierConfig.absolute,
    useCache: false
  })
}

export { resolvePrettierConfig }
