import type { ResolveNextJSPages } from './types'

const resolveNextJSPages: ResolveNextJSPages = function ({ nextJSPagesDir, resolvePath }) {
  if (nextJSPagesDir === null) {
    return null
  }

  return resolvePath.withBaseAndRoot(nextJSPagesDir)
}

export { resolveNextJSPages }
