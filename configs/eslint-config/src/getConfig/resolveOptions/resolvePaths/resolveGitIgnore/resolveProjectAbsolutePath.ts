import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import type { ResolveProjectAbsolutePath } from './types'

const resolveProjectAbsolutePath: ResolveProjectAbsolutePath = function () {
  // eslint-disable-next-line n/no-process-env
  const turboInvocationDir = process.env['TURBO_INVOCATION_DIR']

  if (turboInvocationDir) {
    return turboInvocationDir
  }

  if (existsSync(resolve('.git'))) {
    return process.cwd()
  }

  if (existsSync(resolve('..', '.git'))) {
    return resolve('..')
  }

  if (existsSync(resolve('..', '..', '.git'))) {
    return resolve('..', '..')
  }

  return process.cwd()
}

export { resolveProjectAbsolutePath }
