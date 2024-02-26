import { resolveOverrides } from './resolveOverrides'
import type { ResolveExtend } from './types'

const resolveExtend: ResolveExtend = function ({ config, userOptions }) {
  const { extend } = userOptions

  if (!extend) {
    return config
  }

  const overrides = resolveOverrides({ config, extend })

  return {
    ...config,
    ...extend,
    ...(extend.extends ? { extends: extend.extends } : {}),
    env: {
      ...config.env,
      ...extend.env
    },
    ignorePatterns: [...config.ignorePatterns, ...(extend.ignorePatterns ?? [])],
    overrides,
    parserOptions: {
      ...config.parserOptions,
      ...extend.parserOptions
    },
    ...(extend.plugins ? { plugins: extend.plugins } : {}),
    ...(extend.rules ? { rules: extend.rules } : {}),
    settings: {
      ...extend.settings,
      ...config.settings
    }
  }
}

export { resolveExtend }
