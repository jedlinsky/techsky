import { resolveConfig } from './resolveConfig'
import { resolveExtend } from './resolveExtend'
import { resolveOptions } from './resolveOptions'
import type { GetConfig } from './types'

const getConfig: GetConfig = function ({ cwd, eslintConfigPath, userOptions }) {
  const options = resolveOptions({ cwd, eslintConfigPath, userOptions })

  const config = resolveConfig(options)

  return resolveExtend({ config, userOptions })
}

export { getConfig }
