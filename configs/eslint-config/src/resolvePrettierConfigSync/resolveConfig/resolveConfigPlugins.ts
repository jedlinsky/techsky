import { dirname, resolve } from 'node:path'
import type { ResolveConfigPlugins } from './types.js'

const resolveConfigPlugins: ResolveConfigPlugins = function (config, prettierConfig) {
  if (!config.plugins) {
    return config
  }

  const resolvedPlugins = config.plugins.map((plugin) => {
    if (typeof plugin === 'string' && plugin.startsWith('.')) {
      return resolve(dirname(prettierConfig?.filepath ?? ''), plugin)
    }

    return plugin
  })

  return {
    ...config,
    plugins: resolvedPlugins
  }
}

export { resolveConfigPlugins }
