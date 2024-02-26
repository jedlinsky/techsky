import type { ResolveNextJSApp } from './types'

const resolveNextJSApp: ResolveNextJSApp = function ({ nextJSAppDir, resolvePath }) {
  if (nextJSAppDir === null) {
    return null
  }

  return resolvePath.withBaseAndRoot(nextJSAppDir)
}

export { resolveNextJSApp }
