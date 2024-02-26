import type { ResolveEnv } from './types'

const resolveEnv: ResolveEnv = function ({ envPath, resolvePath }) {
  if (envPath === undefined) {
    return null
  }

  return resolvePath.withRoot(envPath)
}

export { resolveEnv }
