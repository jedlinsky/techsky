import type { ResolveESBuildOptions } from './types.js'

const resolveESBuildOptions: ResolveESBuildOptions = function ({ logLevel }) {
  return function (options) {
    return {
      ...options,
      logLevel
    }
  }
}

export { resolveESBuildOptions }
