import { resolvePath } from './resolvePath'
import type { ResolveUserOptionsPaths } from './types'

const resolveUserOptionsPaths: ResolveUserOptionsPaths = function ({
  envPath,
  ignore,
  nextJSAppDir,
  nextJSPagesDir,
  tsConfigPath
}) {
  return {
    ...(envPath ? { envPath: resolvePath(envPath) } : {}),
    ...(ignore ? { ignore: ignore.map(resolvePath) } : {}),
    ...(nextJSAppDir ? { nextJSAppDir: resolvePath(nextJSAppDir) } : {}),
    ...(nextJSPagesDir ? { nextJSPagesDir: resolvePath(nextJSPagesDir) } : {}),
    ...(tsConfigPath ? { tsConfigPath: resolvePath(tsConfigPath) } : {})
  }
}

export { resolveUserOptionsPaths }
