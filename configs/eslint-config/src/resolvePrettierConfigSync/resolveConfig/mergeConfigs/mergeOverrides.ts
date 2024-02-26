import { resolveOverrides } from './resolveOverrides.js'
import type { MergeOverrides } from './types.js'

const mergeOverrides: MergeOverrides = function (cosmiconfigResult, filePath) {
  const { config, filepath: configPath = '' } = cosmiconfigResult ?? {}
  const { overrides, ...options } = config ?? {}

  if (overrides) {
    return resolveOverrides({ configPath, filePath, options, overrides })
  }

  return options
}

export { mergeOverrides }
