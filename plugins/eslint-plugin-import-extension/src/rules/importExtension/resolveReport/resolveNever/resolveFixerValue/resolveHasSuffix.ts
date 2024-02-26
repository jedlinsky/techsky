import type { ResolveHasSuffix } from './types.js'

const resolveHasSuffix: ResolveHasSuffix = function ({ name, suffix }) {
  return name.endsWith(suffix)
}

export { resolveHasSuffix }
