import type { ResolveConfigOptions } from './types.js'

const resolveConfigOptions: ResolveConfigOptions = function (options) {
  if (options === undefined) {
    return { useCache: true }
  }

  return { ...options, useCache: options.useCache ?? true }
}

export { resolveConfigOptions }
