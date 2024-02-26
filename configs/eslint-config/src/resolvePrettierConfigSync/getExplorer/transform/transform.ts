import { loadExternalConfig } from './loadExternalConfig/index.js'
import { resolveConfigWithoutSchema } from './resolveConfigWithoutSchema.js'
import type { ConfigWithSchema, Transform } from './types.js'

const transform: Transform = function (result) {
  if (result === null) {
    return null
  }

  const { config, filepath } = result

  if (!config) {
    return result
  }

  if (typeof config === 'string') {
    const externalConfig = loadExternalConfig(config, filepath)

    if (externalConfig === null) {
      throw new Error(`Unable to load external config from path "${filepath}"`)
    }

    return {
      ...result,
      config: resolveConfigWithoutSchema(externalConfig)
    }
  }

  if (typeof config === 'object') {
    return {
      ...result,
      config: resolveConfigWithoutSchema(config as ConfigWithSchema)
    }
  }

  throw new TypeError(`Config is only allowed to be an object, but received ${typeof config} in "${filepath}"`)
}

export { transform }
