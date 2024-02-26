import { getConfigs } from './getConfigs'
import type { ResolveConfig } from './types'

const resolveConfig: ResolveConfig = function (options) {
  const {
    comments,
    common,
    files,
    formatting,
    imports,
    json,
    monorepo,
    react,
    stylistic,
    typescript,
    typescriptFallback
  } = getConfigs(options)

  return {
    env: common.env,
    ignorePatterns: [...common.ignorePatterns, ...json.ignorePatterns],
    overrides: [
      ...comments.overrides,
      ...formatting.overrides,
      ...typescriptFallback.overrides,
      ...typescript.overrides,
      ...react.overrides,
      ...imports.overrides,
      ...files.overrides,
      ...stylistic.overrides,
      ...json.overrides,
      ...monorepo.overrides
    ],
    parserOptions: common.parserOptions,
    root: common.root,
    settings: {
      __options: options
    }
  }
}

export { resolveConfig }
