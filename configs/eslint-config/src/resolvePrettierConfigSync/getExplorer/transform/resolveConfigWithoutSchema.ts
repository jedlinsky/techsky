import type { ConfigWithSchema, ResolveConfigWithoutSchema } from './types.js'

const resolveConfigWithoutSchema: ResolveConfigWithoutSchema = function (config) {
  return Object.entries(config).reduce<ConfigWithSchema>((accumulator, [key, value]) => {
    if (key === '$schema') {
      return accumulator
    }

    return {
      ...accumulator,
      [key]: value
    }
  }, {})
}

export { resolveConfigWithoutSchema }
