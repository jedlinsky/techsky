import { loadConfig } from './loadConfig/loadConfig.js'
import { mergeConfigs } from './mergeConfigs/mergeConfigs.js'
import { resolveConfigOptions } from './resolveConfigOptions.js'
import { resolveConfigPlugins } from './resolveConfigPlugins.js'
import type { ResolveConfig } from './types.js'

const resolveConfig: ResolveConfig = function (filePath, options) {
  const resolvedConfigOptions = resolveConfigOptions(options)

  const { editorConfig, prettierConfig } = loadConfig(filePath, resolvedConfigOptions)

  if (editorConfig === null && prettierConfig === null) {
    return null
  }

  const mergedConfigs = mergeConfigs({ editorConfig, filePath, prettierConfig })

  return resolveConfigPlugins(mergedConfigs, prettierConfig)
}

export { resolveConfig }
