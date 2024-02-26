import { defaultPrettierConfig } from './defaultPrettierConfig'
import { resolvePrettierConfig } from './resolvePrettierConfig'
import type { ResolvePrettier } from './types'

const resolvePrettier: ResolvePrettier = function ({ mergePrettier, paths, prettier }) {
  if (prettier === null) {
    return null
  }

  const prettierConfig = resolvePrettierConfig({ paths })

  if (prettierConfig === null) {
    return defaultPrettierConfig
  }

  return {
    ...(mergePrettier ? defaultPrettierConfig : {}),
    ...prettierConfig,
    ...prettier
  }
}

export { resolvePrettier }
