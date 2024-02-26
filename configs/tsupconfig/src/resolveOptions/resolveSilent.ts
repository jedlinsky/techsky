import type { ResolveSilent } from './types.js'

const resolveSilent: ResolveSilent = function ({ dts, silent, watch }) {
  if (dts) {
    return false
  }

  if (silent !== undefined) {
    return silent
  }

  return watch ? 'minimal' : false
}

export { resolveSilent }
