import type { ResolveIsBrowser } from './types.js'

const resolveIsBrowser: ResolveIsBrowser = function ({ tsConfig }) {
  if (!tsConfig.display) {
    return false
  }

  return tsConfig.display.toLowerCase().startsWith('browser')
}

export { resolveIsBrowser }
