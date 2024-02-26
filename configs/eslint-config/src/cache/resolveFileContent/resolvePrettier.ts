import { resolveConfig } from 'resolvePrettierConfigSync'
import type { ResolvePrettier } from './types'

const resolvePrettier: ResolvePrettier = function ({ absolutePath, cwd }) {
  return resolveConfig(cwd, {
    config: absolutePath,
    useCache: false
  })
}

export { resolvePrettier }
