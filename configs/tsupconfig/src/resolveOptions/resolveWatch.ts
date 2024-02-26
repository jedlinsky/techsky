import type { ResolveWatch } from './types.js'

const resolveWatch: ResolveWatch = function ({ userEntry, watch }) {
  if (userEntry === null) {
    return false
  }

  return watch ? true : false
}

export { resolveWatch }
