import type { ResolveBundle } from './types.js'

const resolveBundle: ResolveBundle = function ({ bundle, format }) {
  if (bundle !== undefined) {
    return bundle
  }

  return format === 'cjs' ? true : false
}

export { resolveBundle }
