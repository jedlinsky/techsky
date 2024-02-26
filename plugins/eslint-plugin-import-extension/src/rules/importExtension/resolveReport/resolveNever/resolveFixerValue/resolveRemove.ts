import type { ResolveRemove } from './types.js'

const resolveRemove: ResolveRemove = function ({ hasSuffix, nameExtension }) {
  if (!hasSuffix) {
    return nameExtension
  }

  return `/index${nameExtension}`
}

export { resolveRemove }
