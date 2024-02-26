import type { ResolveExecuteOnWatch } from './types.js'

const resolveExecuteOnWatch: ResolveExecuteOnWatch = function ({ executeOnWatch }) {
  if (executeOnWatch !== undefined) {
    return executeOnWatch
  }

  return true
}

export { resolveExecuteOnWatch }
