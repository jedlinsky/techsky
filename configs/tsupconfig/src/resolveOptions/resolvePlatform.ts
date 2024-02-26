import type { ResolvePlatform } from './types.js'

const resolvePlatform: ResolvePlatform = function ({ isBrowser }) {
  return isBrowser ? 'browser' : 'node'
}

export { resolvePlatform }
