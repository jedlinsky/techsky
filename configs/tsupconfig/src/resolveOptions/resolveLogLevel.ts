import type { ResolveLogLevel } from './types.js'

const resolveLogLevel: ResolveLogLevel = function ({ logLevel }) {
  return logLevel ?? 'error'
}

export { resolveLogLevel }
