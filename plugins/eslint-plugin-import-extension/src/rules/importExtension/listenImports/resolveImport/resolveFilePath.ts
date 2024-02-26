import { resolve } from 'node:path'
import { resolveIsModule } from './resolveIsModule.js'
import type { ResolveFilePath } from './types.js'

const resolveFilePath: ResolveFilePath = function ({ baseDirectory, name }) {
  const isModule = resolveIsModule({ name })

  if (isModule) {
    return null
  }

  return resolve(baseDirectory, name)
}

export { resolveFilePath }
