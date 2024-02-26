import type { ResolveSplitting } from './types.js'

const resolveSplitting: ResolveSplitting = function ({ isBrowser }) {
  return isBrowser
}

export { resolveSplitting }
