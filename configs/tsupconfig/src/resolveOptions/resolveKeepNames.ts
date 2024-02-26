import type { ResolveKeepNames } from './types.js'

const resolveKeepNames: ResolveKeepNames = function ({ minify }) {
  return minify === 'keepNames'
}

export { resolveKeepNames }
