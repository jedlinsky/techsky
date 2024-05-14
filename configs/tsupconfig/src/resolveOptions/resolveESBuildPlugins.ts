import { preparePublish } from 'plugins/index.js'
import type { ESBuildPlugins, ResolveESBuildPlugins } from './types.js'

const resolveESBuildPlugins: ResolveESBuildPlugins = function ({ esbuildPlugins, includeDistPackageJson, ...options }) {
  const preparePublishPlugin = includeDistPackageJson || options.includeCJSBundle ? preparePublish(options) : null

  const plugins: ESBuildPlugins = [...(preparePublishPlugin ? [preparePublishPlugin] : []), ...(esbuildPlugins ?? [])]

  if (plugins.length === 0) {
    return null
  }

  return plugins
}

export { resolveESBuildPlugins }
