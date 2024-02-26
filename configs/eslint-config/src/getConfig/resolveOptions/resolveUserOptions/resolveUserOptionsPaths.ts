import { resolvePath } from './resolvePath'
import type { ResolveUserOptionsPaths } from './types'

const resolveUserOptionsPaths: ResolveUserOptionsPaths = function ({
  envPath,
  nextJSAppDir,
  nextJSPagesDir,
  tsConfigPath
}) {
  return {
    ...(envPath ? { envPath: resolvePath(envPath) } : {}),
    ...(nextJSAppDir ? { nextJSAppDir: resolvePath(nextJSAppDir) } : {}),
    ...(nextJSPagesDir ? { nextJSPagesDir: resolvePath(nextJSPagesDir) } : {}),
    ...(tsConfigPath ? { tsConfigPath: resolvePath(tsConfigPath) } : {})
  }
}

export { resolveUserOptionsPaths }
