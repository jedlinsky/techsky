import type { ResolveHasTypescript } from './types'

const resolveHasTypescript: ResolveHasTypescript = function ({ paths }) {
  return paths.tsConfig !== null
}

export { resolveHasTypescript }
