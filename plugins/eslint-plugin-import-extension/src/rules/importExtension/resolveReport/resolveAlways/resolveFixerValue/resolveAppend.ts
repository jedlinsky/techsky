import type { ResolveAppend } from './types.js'

const resolveAppend: ResolveAppend = function ({ resolvedFilePathExtension, suffix }) {
  if (!suffix) {
    return resolvedFilePathExtension
  }

  return `/${suffix}${resolvedFilePathExtension}`
}

export { resolveAppend }
